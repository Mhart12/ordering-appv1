import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import PlantForm from './PlantForm';
import { plantUpdate, plantSave, plantDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';


class PlantEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.plant, (value, prop) => {
      this.props.plantUpdate({ prop, value });
    });
    //this updates the reducer everytime the property changes
  }

  onButtonPress() {
    const { type, variety_name, phone, shift } = this.props;
    //console.log(type, variety_name, phone, shift);
    this.props.plantSave({ type, variety_name, phone, shift, uid: this.props.plant.uid });
  }

  onTextPress() {
    const { type, variety_name, phone, shift } = this.props;

    Communications.text(phone, `You have just received a new order: Need 20 ${type} ${variety_name} by ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.plant;

    this.props.plantDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <PlantForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Order
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Order
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this order?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { type, variety_name, phone, shift } = state.plantForm;
return { type, variety_name, phone, shift };
};

export default connect(mapStateToProps, {
  plantUpdate, plantSave, plantDelete
 })(PlantEdit);

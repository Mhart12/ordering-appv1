import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { plantFetch } from '../actions';
import ListItem from './ListItem';

class PlantList extends Component {
  componentWillMount() {
    this.props.plantFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ plants }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(plants);
  }

  renderRow(plant) {
    return <ListItem plant={plant} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const plants = _.map(state.plants, (val, uid) => {
    return { ...val, uid };
  });

  return { plants };
};

export default connect(mapStateToProps, { plantFetch })(PlantList);

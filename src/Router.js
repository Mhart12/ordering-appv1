import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PlantList from './components/PlantList';
import PlantCreate from './components/PlantCreate';
import PlantEdit from './components/PlantEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.plantCreate()}
            rightTitle="Add"
            key="plantList"
            component={PlantList}
            title="Select Plant Type"
            initial
          />
          <Scene key="plantCreate" component={PlantCreate} title="Create Plant Variety" />
          <Scene key="plantEdit" component={PlantEdit} title="Edit Plant" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

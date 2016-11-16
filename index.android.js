/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  AsyncStorage
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Launch from "./Component/Launch/Launch.js";
import GuidPager from "./Component/GuidePager/GuidePager.js";

export default class myapp extends Component {
  state = {
    defaultPage:GuidPager
  }

  async getKey(){
    try {
      const value = await AsyncStorage.getItem('@MyApp:Used', function(err, result) {
        console.log(result)
      });
      if (value !== null){
        // We have data!!
        return value.json();
      }
    } catch (error) {
      // Error retrieving data
      return false;
    }
  }

  componentWillMount() {
    let test = this.getKey();
    console.log(test);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: '启动项', index: 0, component:this.state.defaultPage }}
        configureScene={()=>{
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) =>{
          let Component = route.component;
          return <Component {...route.passProps} navigator={navigator}/>
        }}
      />
    );
  }
}
AppRegistry.registerComponent('myapp', () => myapp);

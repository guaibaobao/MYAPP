/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-04 20:38:07
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  AsyncStorage
} from 'react-native';

import Main from "../Main/Main.js";
import GuidePager from "../GuidePager/GuidePager.js";

var entryPage = null;

export default class Lauch extends Component {

  componentWillMount() {
    // 获取函数是一个异步操作函数
    const value = AsyncStorage.getItem('@Myapp:entry', (error, result)=> {
      if(result !== null && result === "true") {
        entryPage = Main;
      }else {
        entryPage = GuidePager;
      }

      setTimeout(()=> {
        this.props.navigator.replace({
          component: entryPage
        }); 
      }, 2000);

    });

    if (value == null){
      setTimeout(()=> {
        this.props.navigator.replace({
          component: GuidePager
        }); 
      }, 2000);
    }
  }

  componentDidMount() {
    // while(1) {
    //   if(entryPage !== null) {
    //     break;
    //   }
    // }

    // setTimeout(()=> {
    //  this.props.navigator.replace({
   //      component: entryPage
   //    });
    // }, 2000);
  }

  render() {
    return (

      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image style={styles.laucheImageStyle} source={{uri:'launchimage'}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  laucheImageStyle: {
    flex: 1
  }
});

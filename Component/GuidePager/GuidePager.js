/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-04 20:35:36
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Main from "../Main/Main.js";

import ViewPager from "react-native-viewpager";

var {width, height} = Dimensions.get('window');
var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024'
];
var count = 0;

export default class GuidePager extends Component {
  state = {
    dataSource: new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    }),
    page: 0
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithPages(IMGS)
    })
  }

  goToLauch = ()=> {
    this.props.navigator.replace({
      component: Main,
    });
  }

  renderPage = (data: Object,
    pageID: number | string,)=> {
    if(pageID == IMGS.length-1) {
      console.log(pageID);
      return (
        <View style={{flex:1, justifyContent:'center'}}>
          <Image
            source={{uri: data}}
            style={styles.page} />
          <TouchableOpacity style={styles.buttonViewStyle} onPress={this.goToLauch}>
            <View >
              <Text style={styles.buttonStyle}>立刻体验</Text>
            </View>
          </TouchableOpacity>
        </View>
      );

      
    }else {
      return (
        <Image
          source={{uri: data}}
          style={styles.page} />
      )
    }
  }

  render() {
    return (
       <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ViewPager
          ref={(viewpager) => {this.viewpager = viewpager}}
          style={this.props.style}
          dataSource={this.state.dataSource}
          renderPage={this.renderPage}
          isLoop={false}
          autoPlay={false}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex:1
  },
  button: {
    padding: 10,
  },
  buttonStyle: {
    fontSize: 18,
    color: 'white'
  },
  buttonViewStyle: {
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    bottom: height * 0.2,
    width: width * 0.6,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 5,
    left: width*0.4/2
  }
});

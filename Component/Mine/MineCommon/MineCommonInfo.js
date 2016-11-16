/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:19:57
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class MineCommonInfo extends Component {
	static defaultProps = {
	  imageUrl: '',
	  title: '',
	  length: 0
	}

  render() {
    return (
      <TouchableOpacity>
        <View style={[styles.container, {width:width/4, height: 70}]}>
        	<Image style={styles.imageStyle} source={{uri: this.props.imageUrl}}></Image>
        	<Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	justifyContent:'center',
  	alignItems:'center'
  },
  imageStyle: {
  	height: 25,
  	width: 46
  }
});

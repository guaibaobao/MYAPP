/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:18:30
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class ExclusiveItem extends Component {
	static defaultProps = {
    title: '',
    subTitle: '',
    desTitle: '',
    imageUrl:''
  }
	
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.itemStyle}>
      		<Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.title}</Text>
      		<Text style={{fontSize: 14, fontWeight: 'bold'}}>{this.props.subTitle}</Text>
      		<Text style={{fontSize: 12, color: '#FF8989'}}>{this.props.desTitle}</Text>
      	</View>
      	<View style={{alignSelf:'flex-end'}}>
      		<Image style={styles.imageStyle} source={{uri:this.props.imageUrl}}></Image>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   width: width/2,
   backgroundColor: 'white',
   height: 120,
   padding: 10,
   borderRightWidth: 1,
   borderRightColor: '#ddd',
   justifyContent: 'space-between'
  },
  itemStyle: {
    
    
  },
  imageStyle: {
    height: 50,
    width: 80,
    resizeMode: 'contain'
  }
});

/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:17:55
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class HomeNav extends Component {
	static defaultProps = {
	  address:'',
	  placeHolder: '',
	}

  render() {
    return (
      <View style={styles.container}>
      	<Text style={{color:'white', fontSize: 12, marginLeft:8, marginRight:8}}>{this.props.address}</Text>
      	<Image style={styles.leftImageStyle} source={{uri:'icon_homepage_down_arrow'}}></Image>
      	<View style={styles.inputStyle}>
      		<Image style={styles.searchImageStyle} source={{uri:'icon_shop_search'}}></Image>
      		<TextInput 
      			placeholder={this.props.placeHolder}
      			underlineColorAndroid={'rgba(0, 0, 0, 0)'}
      			style={{height: 34, textAlign:'center'}}
      		></TextInput>
      	</View>
      	<Image style={styles.rightImageStyle} source={{uri:'icon_homepage_scan'}}></Image>
      	<Image style={styles.rightImageStyle} source={{uri:'icon_homepage_message'}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: '#06C1AE',
  	flexDirection: 'row',
  	alignItems:'center',
  	height: 44
  },
  leftImageStyle: {
  	height: 8,
  	width: 8
  },
  inputStyle: {
  	width: width*0.7,
  	height: 30,
  	backgroundColor: 'white',
  	borderRadius: 16,
  	marginLeft: 12
  },
  rightImageStyle: {
  	height: 25, 
  	width: 25,
  	marginLeft: 10
  },
  searchImageStyle: {
  	height: 15,
  	width: 15,
  	position: 'absolute',
  	left: width*0.7*0.5-55,
  	top: 8
  }
});

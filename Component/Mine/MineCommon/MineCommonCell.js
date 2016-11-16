/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:19:52
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class MineCommonCell extends Component {
	// 静态变量
	static defaultProps = {
	  leftImageUrl: '',
	  leftTitle:'',
	  rightTitle:'',
	  rightImage: '',
    imageIcon: ''
	}

  renderIconOrTitle = ()=> {
    if(this.props.imageIcon !== '') {
      return (
        <Image style={{height:20, width:40, resizeMode:'contain'}} source={{uri:this.props.imageIcon}}></Image>
      )
    }else {
      <Text>{this.props.rightTitle}</Text>
    }
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.leftViewStyle}>
          	<Image style={styles.leftImageStyle} source={{uri:this.props.leftImageUrl}}></Image>
          	<Text>{this.props.leftTitle}</Text>	
          </View>
          <View style={styles.rightViewStyle}>
            {this.renderIconOrTitle()}
          	<Image style={styles.rightImageStyle} source={{uri: this.props.rightImage}}></Image>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  leftViewStyle: {
  	flexDirection: 'row',
  	alignItems:'center',
  },
  leftImageStyle: {
  	height: 24,
  	width: 24,
  	borderRadius: 12,
  	marginRight: 8
  },
  rightImageStyle: {
  	height: 13,
  	width: 8,
  	marginLeft: 8
  },
  rightViewStyle: {
  	flexDirection: 'row',
  	alignItems:'center'
  }
});

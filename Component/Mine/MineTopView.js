/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:20:28
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var {width, height} = Dimensions.get('window');

class BottomViewItem extends Component {
	static defaultProps = {
	  number: 0,
	  itemTitle: '',
	  numberLength: 0
	}

	render() {
		return (
			<TouchableOpacity activeOpacity={0.6}>
				<View style={[styles.itemViewStyle, {width:width/this.props.numberLength+1}]}>
					<Text style={{color:'white'}}>{this.props.number}</Text>
					<Text style={{color:'white'}}>{this.props.itemTitle}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default class MineTopView extends Component {
	static defaultProps = {
	  avatarImage: '',
	  nickName: '',
	  vipImage: '',
	  rightImage: '',
	  topViewItems: []
	}

	renderTopView = ()=> {
		return (
			<TouchableOpacity activeOpacity={0.6}>
				<View style={styles.topViewStyle}>
					<View style={{flexDirection:'row', alignItems:'center', marginLeft: 8}}>
						<Image style={styles.avatarImageStyle} source={{uri: this.props.avatarImage}}/>
						<View style={styles.nickNameStyles}>
							<Text style={styles.textStyle}>{this.props.nickName}</Text>
							<Image style={{height:16, width: 16}} source={{uri: this.props.vipImage}}/>
						</View>
					</View>
					<View style={{marginRight: 8}}>
						<Image style={{height:13, width: 8}} source={{uri: this.props.rightImage}}/>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	renderBottomViewItems = ()=> {
		let allItems = [];
		for(let i = 0; i < this.props.topViewItems.length; i++) {
			let item = this.props.topViewItems[i];
			allItems.push(
				<BottomViewItem 
					key={i}
					number={item.number}
					itemTitle={item.item}
					numberLength={this.props.topViewItems.length}
				/>
			)
		}

		return allItems;
	}

	renderBottomView = ()=> {
		// 返回底部
		return (
			<View style={styles.bottomViewItemStyle}>
				{this.renderBottomViewItems()}
			</View>
		)
	}


  render() {
    return (
      <View style={styles.container}>
      	{/*顶部*/}
      	{this.renderTopView()}
      	{/*底部*/}
      	{this.renderBottomView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#FF6000',
		height: Platform.OS === 'ios' ? 202:180,
		justifyContent: 'center'
	},
	topViewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 30
	},
	avatarImageStyle: {
		height: 80,
		width: 80,
		borderRadius: 40,
	},
	nickNameStyles: {
		flexDirection: 'row',
		marginLeft: 10
	},
	textStyle: {
		color: 'white',
		fontSize: 16
	},
	bottomViewItemStyle:{
		flexDirection: 'row',
		position: 'absolute',
		bottom: 0,
	},
	itemViewStyle: {
		height: 50,
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRightWidth: 1,
		borderRightColor: 'white'
	}
});

/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:18:08
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import NavigatorItem from "../HomeCommon/navigatorItem.js";

// 导入数据
import HomeShopCenterData from "../../../LocalData/Home_D5.json";

import HomeDetail from "../HomeDetail.js";

var dataList = HomeShopCenterData.data;

class ShopItem extends Component {
	jumpToDetail = (url)=> {
		console.log(url)
		if(this.props.callBackFn === null) {
			return;
		}else {
			this.props.callBackFn(url);
		}
	}

	static defaultProps = {
	  imageUrl: '',
	  title: '',
	  subTitle: '',
	  detailUrl: '',
	  callBackFn: null
	}
	render() {
		return (
			<TouchableOpacity onPress={()=>this.jumpToDetail(this.props.detailUrl)}>
				<View style={styles.shopCenterItemStyle}>
					<Image style={{width: 120, height: 100, resizeMode:'contain', borderRadius: 8}} source={{uri:this.props.imageUrl}}></Image>
					<Text>{this.props.title}</Text>
					<Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default class HomeShopCenter extends Component {
	static defaultProps = {
	  callBackFn: null
	}

	renderCenterItems = ()=> {
		let allItems = [];
		for(let i = 0; i < dataList.length; i++) {
			let item = dataList[i];
			allItems.push(
				<ShopItem 
					imageUrl={item.img}
					title ={item.name}
					subTitle={item.showtext.text}
					key={i}
					callBackFn={(url)=>this.props.callBackFn(url)}
					detailUrl= {item.detailurl}
				/>
			)
		}
		return allItems;
	}

  render() {
    return (
      <View style={styles.container}>
      	<NavigatorItem
      		title={'购物中心'}
      	/>
      	<ScrollView
      		horizontal={true}
      		showsHorizontalScrollIndicator={false}
      	>
      		{this.renderCenterItems()}
      	</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 20
  },
  shopCenterItemStyle: {
  	backgroundColor: 'white',
  	width: 150,
  	height: 170,
  	justifyContent:'center',
  	alignItems: 'center'
  },
  subTitleStyle: {
  	backgroundColor: 'orange',
  	fontSize: 12,
  	position: 'absolute',
  	left: 15,
  	top: 80,
  }
});

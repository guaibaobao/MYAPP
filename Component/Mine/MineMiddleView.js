/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:20:14
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 获取数据
import MineData from "../../LocalData/MineData.json";

// 导入公共组件cell
import MineCommonCell from "./MineCommon/MineCommonCell.js";
import MineCommonInfo from "./MineCommon/MineCommonInfo.js";

export default class MineMiddleView extends Component {

	renderCommonInfo = ()=> {
		let allInfos = [];
		let length = MineData.mydata.length;
		for(let i = 0; i < length; i++) {
			let item = MineData.mydata[i];
			allInfos.push(
				<MineCommonInfo 
					key={i}
        	imageUrl={item.imageUrl}
        	title={item.title}
        	length={length}
	      />
			)
		}

		return allInfos;
	}

  render() {
    return (
      <View style={styles.container}>
        <MineCommonCell 
	        leftImageUrl={'collect'}
				  leftTitle={'我的订单'}
				  rightTitle={'查看全部订单'}
				  rightImage={'icon_cell_rightarrow'}
        />
        <View style={styles.infosStyles}>
        	{this.renderCommonInfo()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  infosStyles: {
  	backgroundColor: 'white',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	alignItems:'flex-start',
  	paddingTop: 10,
  	paddingBottom: 10
  }
});

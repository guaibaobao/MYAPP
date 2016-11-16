/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:20:09
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MineCommonCell from "./MineCommon/MineCommonCell.js";

export default class MineListView extends Component {
  render() {
    return (
    	<View>
	      <View style={styles.container}>
	        <MineCommonCell 
		        leftImageUrl={'draft'}
					  leftTitle={'我的钱包'}
					  rightTitle={'账户余额:$100w'}
					  rightImage={'icon_cell_rightarrow'}
	        />
	        <MineCommonCell 
		        leftImageUrl={'like'}
					  leftTitle={'抵用券'}
					  rightTitle={'10张'}
					  rightImage={'icon_cell_rightarrow'}
	        />
	      </View>
	      <View style={styles.container}>
	        <MineCommonCell 
		        leftImageUrl={'card'}
					  leftTitle={'积分商城'}
					  rightTitle={''}
					  rightImage={'icon_cell_rightarrow'}
	        />
	      </View>
	      <View style={styles.container}>
	        <MineCommonCell 
		        leftImageUrl={'new_friend'}
					  leftTitle={'今日推荐'}
					  imageIcon={'me_new'}
					  rightImage={'icon_cell_rightarrow'}
	        />
	      </View>
	      <View style={styles.container}>
	        <MineCommonCell 
		        leftImageUrl={'pay'}
					  leftTitle={'我要合作'}
					  rightTitle={'轻松开店，招财进宝'}
					  rightImage={'icon_cell_rightarrow'}
	        />
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

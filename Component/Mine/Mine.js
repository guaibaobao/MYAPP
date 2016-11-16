/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-03 15:12:55
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// 导入数据
import MineData from "../../LocalData/MineData.json";

// 需要导入子组件
import MineTopView from "./MineTopView.js";
import MineMiddleView from "./MineMiddleView.js";
import MineListView from "./MineListView.js";

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*头部*/}
        <MineTopView
          avatarImage={MineData.data.avatorImage}
          nickName={MineData.data.nickName}
          vipImage={MineData.data.vipImage}
          rightImage="icon_cell_rightarrow"
          topViewItems= {MineData.data.items}
        />
        {/*中间*/}
        <MineMiddleView />
        {/*列表*/}
        <MineListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});

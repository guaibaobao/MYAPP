/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:20:38
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

// 引入头部组件
import MoreTopHeader from "./MoreTopHeader.js";
// 引入内容Cell组件
import MoreScrollViewCell from "./MoreScrollViewCell.js"; 

export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*头部*/}
        <MoreTopHeader 
          title={'更多'}
          imgUrl={'icon_mine_setting'}
        />
        {/*内容部分*/}
        <ScrollView>
          <View style={{marginTop:20}}>
            <MoreScrollViewCell
              title={"扫一扫"}
              imgUrl={'icon_cell_rightarrow'}
            />
          </View>
          <View style={{marginTop:20}}>
            <MoreScrollViewCell
              title={"省流量模式"}
              imgUrl={'icon_cell_rightarrow'}
              isSwitch={true}
            />
            <MoreScrollViewCell
              title={"消息提醒"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"邀请还有使用团灭"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"清空缓存"}
              imgUrl={'icon_cell_rightarrow'}
              rightTitle={'19.4M'}
            />
          </View>
          <View style={{marginTop:20}}>
            <MoreScrollViewCell
              title={"问卷调查"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"支付帮助"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"网络诊断"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"关于麻团"}
              imgUrl={'icon_cell_rightarrow'}
            />
            <MoreScrollViewCell
              title={"我要应聘"}
              imgUrl={'icon_cell_rightarrow'}
            />
          </View>
          <View style={{marginTop:20}}>
            <MoreScrollViewCell
              title={"精品应用"}
              imgUrl={'icon_cell_rightarrow'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ddd'
  }
});

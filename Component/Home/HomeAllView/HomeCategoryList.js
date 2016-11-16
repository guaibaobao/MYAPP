/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:17:37
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

var {width, height} = Dimensions.get('window');

// 导入item小组件
import CategoryItem from "../HomeCommon/categoryItem.js";

// 导入数据
import categoryData from "../../../LocalData/TopMenu.json";

export default class HomeCategoryList extends Component {
  state = {
    currentPageNumber: 0
  }

	renderCategoryItem = (item)=> {
		let itemList = [];
		for(let i = 0; i < item.length; i++) {
			let data = item[i];
			itemList.push(
				<CategoryItem 
    			imageUrl={data.image}
    			title={data.title}
          key={i}
    		/>
			)
		}
		return itemList;
	}

	renderCategoryList = ()=> {
		let categoryList = [];
		for(let i = 0; i < categoryData.data.length; i++) {
			let item = categoryData.data[i];
			categoryList.push(
				<View key={i} style={styles.scrollItemViewStyle}>
      		{this.renderCategoryItem(item)}
      	</View>
			)
		}

		return categoryList;
	}

  renderIndicator = ()=> {
    let allText = [];
    let style = '';
    for(let i = 0; i < categoryData.data.length; i++) {
      if(this.state.currentPageNumber === i) {
        style={color:'#06C1AE'};
      }else {
        style={color:'#CCCCCC'};
      }
      allText.push(
        <Text key={i} style={[{fontSize:25, marginLeft:8}, style]}>&bull;</Text>
      )
    }

    return allText;
  }

  onScrollAnimationEnd = (event)=> {
    var currentPage = Math.floor(event.nativeEvent.contentOffset.x / width);
    console.log(currentPage);
    this.setState({
      currentPageNumber: currentPage
    })
  }

  render() {
    return (
      <View>
        <ScrollView
        	horizontal={true}
        	pagingEnabled={true}
        	showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event)=>this.onScrollAnimationEnd(event)}
        >


          {this.renderCategoryList()}
        </ScrollView>
        <View style={styles.indicatorStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollItemViewStyle: {
  	backgroundColor: 'white',
  	height: 202,
  	width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  indicatorStyle: {
    width: width,
    height: 40,
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  }
});

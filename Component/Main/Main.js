/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  AsyncStorage
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from "../Home/Home.js";
import Merchant from "../Merchant/Merchant.js";
import Mine from "../Mine/Mine.js";
import More from "../More/More.js";

export default class MainTabBar extends Component {
  componentDidMount() {
    AsyncStorage.setItem('@Myapp:entry', 'true');
  }

  renderTabBarItem = (selectedTab, title, iconImage, iconSelectedImage, Component, key)=>{
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === selectedTab}
        title={title}
        renderIcon={() => <Image style={styles.iconImageStyle} source={{uri:iconImage}} />}
        renderSelectedIcon={() => <Image style={styles.iconImageStyle} source={{uri:iconSelectedImage}} />}
        onPress={() => this.setState({ selectedTab: selectedTab })}>
        <Navigator
            initialRoute={{ title: title, index: 0, component:Component, key:key }}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) =>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>
            }}
        />
      </TabNavigator.Item>
    )
  }

  state = {
    selectedTab: 'home'
  }

  render() {
    return (
      <TabNavigator>
       
        {this.renderTabBarItem('merchant', "商家", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', Merchant, 'WebView')}
        {this.renderTabBarItem('home', "首页", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', Home, '')}
        {this.renderTabBarItem('mine', "我的", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', Mine, '')}
        {this.renderTabBarItem('more', "更多", 'icon_tabbar_misc', 'icon_tabbar_misc_selected', More, '')}
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconImageStyle: {
    height:25,
    width:25
  }
});


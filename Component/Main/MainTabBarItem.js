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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class TabbarItem extends Component {
  state = {
    selectedTab: 'home'
  }


  componentDidMount() {
    alert(this.props);
  }

  render() {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === this.props.selectedTab}
        title={this.props.title}
        renderIcon={() => <Image style={styles.iconImageStyle} source={{uri:'icon_tabbar_homepage'}} />}
        renderSelectedIcon={() => <Image style={styles.iconImageStyle} source={{uri:'icon_tabbar_homepage_selected'}} />}
        onPress={() => this.setState({ selectedTab: this.props.selectedTab })}>
        <this.props.Component/>
      </TabNavigator.Item>
    )
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


/*
* @Author: jingyun
* @Date:   2016-11-02 18:29:36
* @Last Modified by:   jingyun
* @Last Modified time: 2016-11-02 21:18:35
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NavigatorItem extends Component {
	static defaultProps = {
	  title: ''
	}
  render() {
    return (
      <View style={styles.container}>
        <Text>- {this.props.title} -</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});

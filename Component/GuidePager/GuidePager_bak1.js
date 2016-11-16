'use strict';

var React = require('react');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar
} = require('react-native');

var ViewPager = require('react-native-viewpager');
var Lauch = require("../Launch/Launch");
//var ViewPager = require('./ViewPager');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024'
];

var count = 0;

var GuidePager = React.createClass({
  getDefaultProps: function() {
    return {
      
    }
  },

  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(IMGS),
      page: 0
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ViewPager
          ref={(viewpager) => {this.viewpager = viewpager}}
          style={this.props.style}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={false}
          autoPlay={false}/>
      </View>

    );
  },

  goToLauch: function() {
    this.props.navigator.replace({
      component: Lauch
    });
  },

  _renderPage: function(
    data: Object,
    pageID: number | string,) {
    if(pageID == IMGS.length-1) {
      console.log(pageID);
      return (
        <View style={{flex:1, justifyContent:'center'}}>
          <Image
            source={{uri: data}}
            style={styles.page} />
          <TouchableOpacity style={styles.buttonViewStyle} onPress={this.goToLauch}>
            <View >
              <Text style={styles.buttonStyle}>立刻体验</Text>
            </View>
          </TouchableOpacity>
        </View>
      );

      
    }else {
      return (
        <Image
          source={{uri: data}}
          style={styles.page} />
      )
    }
    
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex:1
  },
  button: {
    padding: 10,
  },
  buttonStyle: {
    fontSize: 18,
    color: 'white'
  },
  buttonViewStyle: {
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    bottom: deviceHeight * 0.2,
    width: deviceWidth * 0.6,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 5,
    left: deviceWidth*0.4/2
  }
});

module.exports = GuidePager;
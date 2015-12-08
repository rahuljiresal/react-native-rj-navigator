/**
 * react-native-rj-navigator Example
 * https://github.com/rahuljiresal/react-native-rj-navigator
 */
'use strict';

var React = require('react-native'),
    Colors = require('./colors'),
    Navigator = require('react-native-rj-navigator').Navigator,
    NavigationBarButton = require('react-native-rj-navigator').NavBarButton,
    NavigationBar = require('./navigation-bar'),
    NavigationBarTitle = require('react-native-rj-navigator').NavBarTitle;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  SegmentedControlIOS
} = React;

var ViewTwo = React.createClass({

    getInitialState: function() {
        return {
            title: 'Old Title'
        };
    },

    _navigationBarTitle: function() {
        return (
            <NavigationBarTitle 
                text={this.state.title} 
                onPress={ () => AlertIOS.alert('Title', 'This is a callback on the title') }
            />
        );
    },

    _navigationBarLeftButton: function() {
        return (
            <NavigationBarButton
                side={'left'}
                text={'Back'}
                color={Colors.defaultIOSTintColor}
                onPress={ () => this.props.navigator.pop() }
            />
        );
    },

    _navigationBarRightButton: function() {
        return (
            <NavigationBarButton
                text={'Done'}
                color={Colors.defaultIOSTintColor}
                onPress={function() {
                    this.setState({
                        title: 'Changed Name'
                    });
                }.bind(this)}
            />
        );
    },

    _navigationBar: function() {
        return (
            <NavigationBar
                title={ this._navigationBarTitle() }
                leftButton={ this._navigationBarLeftButton() }
                rightButton={ this._navigationBarRightButton() }
            />
        );
    },
    
    render: function() {
        return (
            <View style={{flex: 1}} >
                { this._navigationBar() }
                <View style={styles.viewTwo}>
                    <Text>This is view #2.</Text>
                </View>
            </View>
        );
    }

});

var styles = StyleSheet.create({
    viewTwo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'light-blue'
    },
    segmentControlContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    segmentControl: {
        width: 160
    },

});

module.exports = ViewTwo;
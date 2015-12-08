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
    SwitchIOS,
    Navigator
} = React;

var ViewOne = React.createClass({

    getInitialState: function() {
        return {
            title: 'View One'
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
            <View style={{flex: 1}}> 
                { this._navigationBar() }
                <View style={styles.viewOne}>
                    <Text>This is view #1.</Text>
                </View>
            </View> 
        );
    }

});

var styles = StyleSheet.create({
    viewOne: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

});

module.exports = ViewOne;
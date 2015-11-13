/**
* react-native-rj-navigator Example
* https://github.com/rahuljiresal/react-native-rj-navigator
*/
'use strict';

var React = require('react-native'),
    Navigator = require('react-native-rj-navigator').Navigator,
    NavBarButton = require('react-native-rj-navigator').NavBarButton,
    NavBarTitle = require('react-native-rj-navigator').NavBarTitle;

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    SwitchIOS
} = React;

var ViewOne = React.createClass({

    _setNavigationBar: function() {
        this.props.navComponent.setNavItems({
            title:{
                component: (
                    <NavBarTitle text={'View One'} />
                    ),
                event: function() {
                    AlertIOS.alert('Title', 'This is a callback on the title');
                }
            },
            rightItem:{
                component: (
                    <NavBarButton text={'Done'} />
                    ),
                event: function() {
                    AlertIOS.alert('Done', 'You clicked Done.');
                }.bind(this)
            }
        });
    },

    componentWillMount: function() {
        this._setNavigationBar();
    },

    render: function() {
        return (
            <View style={styles.viewOne}>
                <Text>This is view #1.</Text>
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
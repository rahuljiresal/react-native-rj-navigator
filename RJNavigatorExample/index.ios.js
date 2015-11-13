/**
* react-native-rj-navigator Example
* https://github.com/rahuljiresal/react-native-rj-navigator
*/
'use strict';

var React = require('react-native'),
Navigator = require('react-native-rj-navigator').Navigator,
NavBarButton = require('react-native-rj-navigator').NavBarButton,
NavBarTitle = require('react-native-rj-navigator').NavBarTitle;

var RootView = require('./root-view');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    SwitchIOS
} = React;

var RJNavigatorExample = React.createClass({
    render: function() {
        return (
            <Navigator 
            backgroundColor={Colors.defaultIOSToolBarColor}
            tintColor={Colors.defaultIOSTintColor}
            initialRoute={{ component: RootView }} />
        );
    }
});

var Colors = {
    defaultIOSTintColor: '#007AFF', 
    defaultIOSToolBarColor: '#f8f8f8',
};


AppRegistry.registerComponent('RJNavigatorExample', () => RJNavigatorExample);

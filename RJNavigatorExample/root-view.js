/**
* react-native-rj-navigator Example
* https://github.com/rahuljiresal/react-native-rj-navigator
*/
'use strict';

var React = require('react-native'),
    Navigator = require('react-native-rj-navigator').Navigator,
    NavBarButton = require('react-native-rj-navigator').NavBarButton,
    NavBarTitle = require('react-native-rj-navigator').NavBarTitle;

var ViewOne = require('./view-one'),
    ViewTwo = require('./view-two');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    SwitchIOS
} = React;

var RootView = React.createClass({

    _setNavigationBar: function() {
        this.props.navComponent.setNavItems({
            title:{
                component: (
                    <NavBarTitle text={'Root View'} />
                    ),
                event: function() {
                    AlertIOS.alert('Title', 'This is a callback on the title');
                }
            },
            rightItem:{
                component: (
                    <NavBarButton text={'Next'} />
                    ),
                event: function() {
                    if (this.state.switch) {
                        this.props.navigator.push({ 
                            component: ViewOne, 
                            props: {
                                text: 'This is the first view',
                                number: 100
                            }
                        });
                    }
                    else {
                        this.props.navigator.push( { component: <ViewTwo text={'This is the second view.'} /> })
                    }
                }.bind(this)
            },
            leftItem: {
                component: (
                    <NavBarButton text={'Hello'} side={'left'}/>
                    ),
                event: function() {
                    AlertIOS.alert('The Switch is...', this.state.switch === true ? 'On' : 'Off');
                }.bind(this)
            }
        });
    },

    componentWillMount: function() {
        this._setNavigationBar();
    },

    getInitialState: function() {
        return ({
            switch: false
        });
    },

    render: function() {
        return (
            <View style={styles.rootView}>
                <Text style={{ textAlign: 'center', margin: 12 }}>Turn this switch On/Off to toggle between different views being pushed on the navigation stack.</Text>
                <SwitchIOS
                    onValueChange={(value) => { 
                        console.log(value);
                        this.setState({switch: value});
                    }}
                    value={this.state.switch} />
                <Text style={{ textAlign: 'center', margin: 12 }}>{this.state.switch ? 'On - View #1' : 'Off - View #2'}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    rootView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

});

module.exports = RootView;
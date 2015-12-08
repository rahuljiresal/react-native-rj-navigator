/**
* react-native-rj-navigator Example
* https://github.com/rahuljiresal/react-native-rj-navigator
*/
'use strict';

var React = require('react-native'),
    Colors = require('./colors'),
    Navigator = require('react-native-rj-navigator').Navigator,
    NavigationBarButton = require('react-native-rj-navigator').NavBarButton,
    NavigationBarTitle = require('react-native-rj-navigator').NavBarTitle;

var ViewOne = require('./view-one'),
    ViewTwo = require('./view-two');

var NavigationBar = require('./navigation-bar');


var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    SwitchIOS,
    SegmentedControlIOS,
    TouchableOpacity
} = React;

var RootView = React.createClass({

    _navigationBarTitle: function() {
        return (
            <View style={styles.segmentControlContainer} >
                <SegmentedControlIOS
                    style={ styles.segmentControl }
                    values={['One', 'Two']}
                    selectedIndex={1}
                />
            </View>
        );
    },

    _navigationBarLeftButton: function() {
        return (
            <NavigationBarButton
                side={'left'}
                text={'Hello'}
                color={Colors.defaultIOSTintColor}
                onPress={function() {
                    AlertIOS.alert('The Switch is...', this.state.switch === true ? 'On' : 'Off');
                }.bind(this)}
            />
        );
    },

    _navigationBarRightButton: function() {
        return (
            <NavigationBarButton
                text={'Next'}
                color={Colors.defaultIOSTintColor}
                onPress={function() {
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

    getInitialState: function() {
        return ({
            switch: false,
            title: 'Title'
        });
    },

    _change: function() {
        this.setState({
            title: 'New Title'
        })
    },

    render: function() {
        return (
            <View style={{flex: 1}}>
                { this._navigationBar() }
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
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
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

module.exports = RootView;
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
  SegmentedControlIOS
} = React;

var ViewTwo = React.createClass({
  _setNavigationBar: function() {
        this.props.navComponent.setNavItems({
            title:{
                component: (
                    <View
                        style={styles.segmentControlContainer} >
                        <SegmentedControlIOS
                            style={ styles.segmentControl }
                            values={['One', 'Two']}
                            selectedIndex={1}
                        />
                    </View>                    
                  ),
            },
            rightItem:{
                component: (
                    <NavBarButton text={'Button'} />
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
            <View style={styles.viewTwo}>
                <Text>This is view #2.</Text>
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
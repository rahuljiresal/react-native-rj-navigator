'use strict';

var React = require('react-native'),
    NavBar = require('react-native-navbar');

var {
    StyleSheet,
    } = React;

var NavigationBar = React.createClass({
    render: function() {
        return (
            <NavBar
                tintColor={'#f8f8f8'}
                style={styles.navBar}
                title={ this.props.title }
                leftButton={ this.props.leftButton }
                rightButton={ this.props.rightButton }
            />
        );
    }
});

var styles = StyleSheet.create({
    navBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

})

module.exports = NavigationBar;
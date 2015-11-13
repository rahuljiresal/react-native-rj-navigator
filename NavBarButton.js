/**
 * Created by Rahul Jiresal on 11/5/15.
 */

'use strict';

var React = require('react-native');
var {
    TouchableOpacity,
    Text,
    StyleSheet
    } = React;

var NavBarButton = React.createClass({

    render: function() {
        var alignment = (this.props.side === 'left') ? styles.navBarLeftButton : styles.navBarRightButton;
        return (
            <TouchableOpacity
                style={ alignment }
                onPress={this.props.onPress}>
                <Text style={[styles.navBarButtonText, { color: this.props.color || 'black' }]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    },
});

var styles = StyleSheet.create({
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        fontSize: 16,
        marginVertical: 10,
    },

})

module.exports = NavBarButton;
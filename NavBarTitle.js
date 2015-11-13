/**
 * Created by Rahul Jiresal on 11/12/15.
 */

'use strict';

var React = require('react-native');

var {
    TouchableOpacity,
    Text,
    StyleSheet
    } = React;

var NavBarTitle = React.createClass({

    render: function() {
        var text = <Text style={ styles.navBarTitleText }>{this.props.text}</Text>;
        if (this.props.onPress) {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    {text}
                </TouchableOpacity>
            );
        }
        else {
            return text;
        }
    },
});

var styles = StyleSheet.create({
    navBarTitleText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 10,
    }
});

module.exports = NavBarTitle;
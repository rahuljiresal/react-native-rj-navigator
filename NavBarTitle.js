/**
 * Created by Rahul Jiresal on 11/12/15.
 */

'use strict';

var ReactNative = require('react-native');
var React = require('react');

var {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
    } = ReactNative;

var NavBarTitle = React.createClass({

    render: function() {
        var child;
        if (this.props.text) {
            child = <Text style={ styles.navBarTitleText }>{this.props.text}</Text>;
        }
        else if (this.props.source) {
            child = <Image style={styles.navBarTitleImage} source={this.props.source}/>
        }

        if (this.props.onPress) {
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    {child}
                </TouchableOpacity>
            );
        }
        else {
            return child;
        }
    },
});

var styles = StyleSheet.create({
    navBarTitleText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 6,
    },
    navBarTitleImage: {
        height: 24,
        width: 24,
        marginVertical: 6
    }
});

module.exports = NavBarTitle;
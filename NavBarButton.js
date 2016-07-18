/**
 * Created by Rahul Jiresal on 11/5/15.
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

var NavBarButton = React.createClass({

    render: function() {
        var alignment = (this.props.side === 'left') ? styles.navBarLeftButton : styles.navBarRightButton;
        var child;
        if (this.props.text) {
            child = <Text style={[styles.navBarButtonText, { color: this.props.color || 'black' }]}>{this.props.text}</Text>;
        }
        else if (this.props.source) {
            child = <Image style={[styles.navBarTitleImage, this.props.color ? { tintColor: this.props.color } : {} ]}
                           source={this.props.source}
                           resizeMode={ 'contain' }/>
        }

        return (
            <TouchableOpacity
                style={ alignment }
                onPress={this.props.onPress}>
                { child }
            </TouchableOpacity>
        );
    },
});

var styles = StyleSheet.create({
    navBarLeftButton: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    navBarRightButton: {
        paddingRight: 10,
        justifyContent: 'center'
    },
    navBarButtonText: {
        fontSize: 16,
    },
    navBarTitleImage: {
        height: 24,
        width: 24,
    }
})

module.exports = NavBarButton;
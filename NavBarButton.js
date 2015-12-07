/**
 * Created by Rahul Jiresal on 11/5/15.
 */

'use strict';

var React = require('react-native');
var {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
    } = React;

var NavBarButton = React.createClass({

    render: function() {
        var alignment = (this.props.side === 'left') ? styles.navBarLeftButton : styles.navBarRightButton;
        var child;
        if (this.props.text) {
            child = <Text style={[styles.navBarButtonText, { color: this.props.color || 'black' }]}>{this.props.text}</Text>;
        }
        else if (this.props.source) {
            child = <Image style={[styles.navBarTitleImage, {tintColor: this.props.color || 'black'}]} source={this.props.source}/>
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
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleImage: {
        height: 24,
        width: 24,
        marginVertical: 10
    }
})

module.exports = NavBarButton;
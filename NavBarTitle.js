/**
 * Created by Rahul Jiresal on 11/12/15.
 */

'use strict';

var React = require('react-native');

var {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
    } = React;

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
    },
    navBarTitleImage: {
        height: 24,
        width: 24,
        marginVertical: 10
    }
});

module.exports = NavBarTitle;
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NeuPressedView extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <View style={[styles.startShadow, this.props.style]}>
                    <View style={[styles.endShadow, this.props.style, this.props.contentStyle]}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        width: '100%',

    },
    startShadow: {
        height: 65,
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: '#e0e5ec',
        borderWidth: 6,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 5,
            height: 5
        },
    },
    endShadow: {
        height: 65,
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: '#e0e5ec',
        borderWidth: 7,
        overflow: 'hidden',
        shadowColor: 'white',
        shadowRadius: 5,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: -5,
            height: -7
        },
        justifyContent: 'center',
        alignItems: 'center'
    }
}
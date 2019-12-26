import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NeuPressedView from './NeuPressedView'
import NeuUnpressedView from './NeuUnpressedView'

export default class NeuView extends Component {
    render() {
        const pressed = this.props.pressed
        if (pressed) {
            return (
                <NeuPressedView {...this.props} />
            )
        }
        else {
            // let modifiedProps =  ...this.props 
            // if (modifiedProps.style.height) {
            //     modifiedProps.style.height -= 15
            // }
            return (
                <NeuUnpressedView {...this.props} />
            )
        }
    }
}

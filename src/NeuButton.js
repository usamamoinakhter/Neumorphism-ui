import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import NeuView from './NeuView'

export default class NeuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: this.props.pressed ? this.props.pressed : false
        }
    }
    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                activeOpacity={this.props.noPressedState ? 0.7 : 0.9}
                style={{ width: '100%', marginTop: 20 }} onPress={() => {

                    if (this.props.noPressedState === true) {
                        if (typeof this.props.onPress === 'function') { this.props.onPress(); }
                        else { throw new Error("You should define onPress prop for the NeuButton") }
                    }
                    else {
                        if (this.state.clicked) {
                            if (typeof this.props.onUnpress === 'function') {
                                this.props.onUnpress()

                            }

                        }
                        else {
                            if (typeof this.props.onPress === 'function') { this.props.onPress(); }
                            else { throw new Error("You should define onPress prop for the NeuButton") }
                        }


                    }
                    this.setState({ clicked: !this.state.clicked })

                }}>
                <NeuView {...this.props} pressed={this.props.noPressedState ? false : this.state.clicked}>
                    {this.props.children}
                </NeuView>
            </TouchableOpacity>
        )
    }
}

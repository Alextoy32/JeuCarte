import React from 'react'
import {Text, StyleSheet} from 'react-native'

import { Container, TouchContainer } from './styles/styles'
import { SideThree, SideOne, SideTwo, SideFour, SideFive, SideSix } from './dice/side'

class DiceApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { side1: 0, side2: 0 }
        this._rollDice = this._rollDice.bind(this)
    }

    _rollDice() {
        const side1 = Math.floor(Math.random() * 6)
        const side2 = Math.floor(Math.random() * 6)
        this.setState({ side1,side2 })
    }

    render() {
        const Side1 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side1]
        const Side2 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side2]
        return (
            <Container>
                <Text style={styles.message}>Jeu des dés!!!</Text>
                <TouchContainer onPress={this._rollDice}>
                    <Side1 />
                    <Side2 />
                </TouchContainer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    message: {
      fontSize: 50
    },
  });

export default DiceApp

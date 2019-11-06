import React from 'react'
import {Text} from 'react-native'

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
                <TouchContainer onPress={this._rollDice}>
                    <Text>Jeu des dés!!!</Text>
                    <Side1 />
                    <Side2 />
                    <Text>la somme est {this.state.side1 + this.state.side2 +2}</Text>
                </TouchContainer>
            </Container>
        )
    }
}

export default DiceApp

import React from 'react'
import {Text, StyleSheet} from 'react-native'

import { Container, TouchContainer } from './styles/styles'
import { SideThree, SideOne, SideTwo, SideFour, SideFive, SideSix } from './dice/side'
import {DoubleN, Double5, Double1, Som10, Som11, Som7,Som5 , NewPigeon, PigeonBois, PigeonDouble6} from './biskit/strings'

class DiceApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { side1: 0, side2: 0, r:0, n:4}
        this._rollDice = this._rollDice.bind(this)
    }

    _display() {
        if (this.state.side1 == this.state.side2 && this.state.side1+1 == 1){
            this.setState({r:2,n:1})
        } else if(this.state.side1 == this.state.side2 && this.state.side1+1 == 5){
            this.setState({r:1,n:5})
        }else if(this.state.side1 == 1 && this.state.side2 == 2 || this.state.side1 == 2 && this.state.side2 == 1){
            this.setState({r:3,n:2})
        } else if(this.state.side1 == this.state.side2){
            this.setState({r:0,n:this.state.side1+1})
        } else if(this.state.side1 + this.state.side2 +2 == 10){
            this.setState({r:3,n:2})
        }else if(this.state.side1 + this.state.side2+2 == 11){
            this.setState({r:4,n:2})
        }else if(this.state.side1 + this.state.side2+2 == 7){
            this.setState({r:5,n:2})
        }else if(this.state.side1 + this.state.side2+2 == 5){
            this.setState({r:6,n:2})
        }else{
            this.setState({r:0,n:0})
        }
    }

    _rollDice() {
        const side1 = Math.floor(Math.random() * 6)
        const side2 = Math.floor(Math.random() * 6)
        this._display()
        this.setState({ side1,side2})
        //this.setState({side1:0,side1:0,r:0,n:0})
    }

    render() {
        const Side1 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side1]
        const Side2 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side2]
        const Phrase = [DoubleN, Double5, Double1, Som10, Som11, Som7,Som5 , NewPigeon, PigeonBois, PigeonDouble6][this.state.r]
        return (
            <Container>
                <Phrase name='Jean' n={this.state.n}></Phrase>
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

import React from 'react'
import {Text} from 'react-native'


export const DoubleN = props =>
<Text>{props.name} distribue {props.n} gorgées puis rejoue</Text>

export const Double5 = props =>
<Text>{props.name} boit 1 gorgées et distribue 5 puis rejoue</Text>

export const Double1 = () =>
<Text>Tournée générale, tout le monde boit 1 gorgée puis rejoue</Text>

export const Som5 = props =>
<Text>{props.name} choisit de faire un mini jeu ou invente une règle</Text>

export const Som7 = props =>
<Text>Bizkit! le dernier boit 1 gorgées, puis {props.name} rejoue</Text>

export const som9 = props =>
<Text>Le joueur précédent boit 1 gorgée puis {props.name} rejoue</Text>

export const Som10 = props =>
<Text>{props.name} boit 1 gorgées puis passe les dés {props.nameS}</Text>

export const Som11 = props =>
<Text>le suivant boit 1 gorgées puis {props.name} rejoue</Text>

export const NewPigeon = props =>
<Text>{props.name} devient pigeon, tu boit 1 gorgées et passe les dés</Text>

export const PigeonBois = props =>
<Text>{props.name} boit {props.n} gorgées</Text>

export const PigeonDouble6 = props =>
<Text>{props.name} n'est plus pigeon, et distribue 6 gorgées</Text>




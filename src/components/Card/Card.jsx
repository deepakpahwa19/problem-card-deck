import React, { useContext } from 'react'
import { CardContext } from '../../App'
import './Card.css'


export const Card = ({cardValue, cardType}) => {

    const {cardList} = useContext(CardContext)
    console.log(cardList[0][0])
    return <div className='card'>

        <h1>{cardValue}</h1>
        <h4>{cardType}</h4>
    </div>


}
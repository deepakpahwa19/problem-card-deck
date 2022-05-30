import React, {useContext} from 'react'
import { CardContext } from '../../App';
import { Card } from '../Card/Card';
import './DrawnCards.css';

export const DrawnCards = () => {
    const {cardList: [type1 =[], type2 = [], type3 = [], type4=[]]} = useContext(CardContext)
    // const [type1 =[], /*type2 = [], type3 =[], type4 = []*/] = cardList;

    // console.log(type1);
    return (
        <div className='drawn-cards'>
            {type1.map(card => card.isDrawn ? <Card cardValue={card.value} cardType={card.type} /> :null)}
            {type2.map(card => card.isDrawn ?<Card cardValue={card.value} cardType={card.type} /> :null)}
            {type3.map(card => card.isDrawn ?<Card cardValue={card.value} cardType={card.type} /> :null)}
            {type4.map(card => card.isDrawn ? <Card cardValue={card.value} cardType={card.type} /> :null)}
        </div>
    )


}
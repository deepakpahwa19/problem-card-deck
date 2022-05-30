import React, {useContext} from 'react'
import { CardContext } from '../../App';
import { Card } from '../Card/Card';

export const DrawnCards = () => {
    const {cardList: [type1 =[]]} = useContext(CardContext)
    // const [type1 =[], /*type2 = [], type3 =[], type4 = []*/] = cardList;

    console.log(type1);
    return (
        <div>
            {type1.map(card => card.isDrawn ? <Card cardValue={card.value} cardType={card.type} /> :null)}
            {/* {type2.map(card => <Card cardValue={card.value} cardType={card.type} />)}
            {type3.map(card => <Card cardValue={card.value} cardType={card.type} />)}
            {type4.map(card => <Card cardValue={card.value} cardType={card.type} />)} */}
        </div>
    )


}
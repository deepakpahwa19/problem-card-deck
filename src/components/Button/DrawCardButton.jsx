import React, { useCallback, useContext } from 'react'
import { CardContext } from '../../App';

export const DrawCardButton =() => {

    const {cardList, setCardList} = useContext(CardContext)

    
    const onClickDrawCardButtonHandler = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 13);
        console.log(randomNumber);

        if (!cardList[0][randomNumber].isDrawn) {
            setCardList(cards => {
                const updatedCard = {...cards[0][randomNumber]}
                updatedCard.isDrawn = true
                const newCards = [...cards];
                newCards[0][randomNumber].isDrawn = true;
                // console.log('New Card ', )
                return newCards;
            })
        }
    }, [cardList, setCardList])

    return <button className='drawButton' onClick={onClickDrawCardButtonHandler}>Draw Cards</button>


}
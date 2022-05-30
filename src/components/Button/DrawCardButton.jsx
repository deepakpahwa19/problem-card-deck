import React, { useCallback, useContext, useRef } from 'react'
import { CardContext } from '../../App';

export const DrawCardButton = () => {

    const { cardList, setCardList } = useContext(CardContext);

    const counter = useRef(52);


    const onClickDrawCardButtonHandler = useCallback(() => {
        if(counter.current === 0) {
            return;
        }
        const randomNumbers = [];
        for (let index = 0; index < (counter.current < 5 ? counter.current : 5); index++) {
            randomNumbers.push({ value: Math.floor(Math.random() * 13), isMarked: false })
        }
        console.log('randomNumbers => ', randomNumbers)
        const newCardList = [ ...cardList ]
        for (let index = 0; index < randomNumbers.length; ) {
            const typeIndex = Math.floor(Math.random() * 4);
            console.log(index, randomNumbers[index]);
            console.log('typeIndex: ', typeIndex, cardList[typeIndex]);


            if (!cardList[typeIndex][randomNumbers[index].value].isDrawn) {
                newCardList[typeIndex][randomNumbers[index].value].isDrawn = true;
                counter.current--;
                index++
            }
        }
        setCardList(newCardList)
        // const randomNumber = 0;
        // console.log(randomNumber);
        // if (!cardList[0][randomNumber].isDrawn) {
        //     setCardList(cards => {
        //         const updatedCard = { ...cards[0][randomNumber] }
        //         updatedCard.isDrawn = true
        //         const newCards = [...cards];
        //         newCards[0][randomNumber].isDrawn = true;
        //         // console.log('New Card ', )
        //         return newCards;
        //     })
        // }
    }, [cardList, setCardList])

    return <button className='drawButton' onClick={onClickDrawCardButtonHandler} disabled={counter.current === 0 }>Draw Cards</button>


}
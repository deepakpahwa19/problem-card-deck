 const createCard = (value, type, isDrawn = false) => {
     return {
         value, type, isDrawn
     }
 }

const types = ['Club', 'Heart', 'Space', 'Diamond']


export const getNewCard = () => {
    const cards = [];
    for(let i = 0; i< types.length; i++) {
        const allCardsForAType = [];
        for(let j = 0; j < 13; j++){
            allCardsForAType.push(createCard(j+1, types[i]))
        }
        cards.push(allCardsForAType);
    }
    return cards;

}



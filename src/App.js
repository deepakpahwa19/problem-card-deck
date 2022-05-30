import React, { useCallback, useState } from 'react';
import './App.css';
import { DrawCardButton } from './components/Button/DrawCardButton';
import { Card } from './components/Card/Card';
import { CardDeck } from './components/CardDeck/CardDeck';
import { DrawnCards } from './components/DrawnCards/DrawnCards';
import { getNewCard } from './data/cards'


export const CardContext = React.createContext();
function App() {

  const [cardList, setCardList] = useState(getNewCard());

  const onClickResetHandler = useCallback(() => {
    setCardList(getNewCard());
  }, [])

  return (
    <CardContext.Provider value={{ cardList, setCardList }}>
      <div className="App">
        <CardDeck />
        <DrawCardButton />
        <button onClick={onClickResetHandler}>Reset</button>
        <DrawnCards />
      </div>
    </CardContext.Provider>
  );
}

export default App;

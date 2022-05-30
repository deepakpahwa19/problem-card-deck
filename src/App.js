import React, { useState } from 'react';
import './App.css';
import { DrawCardButton } from './components/Button/DrawCardButton';
import { Card } from './components/Card/Card';
import { DrawnCards } from './components/DrawnCards/DrawnCards';
import { cards } from './data/cards'


export const CardContext = React.createContext();
function App() {

  const [cardList, setCardList] = useState(cards);

  return (
    <CardContext.Provider value={{ cardList, setCardList }}>
      <div className="App">
        <Card cardValue="5" cardType={"Heart"} />
        <DrawCardButton />
        <DrawnCards />
      </div>
    </CardContext.Provider>
  );
}

export default App;

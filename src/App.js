import React from 'react';
import './App.css';
import Header from './Component/Header';
import Balance from './Component/Balance';
import Expense from './Component/Expense';
import History from './Component/History';
import { AddTransaction } from './Component/Transition';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <Expense />
        <History />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;

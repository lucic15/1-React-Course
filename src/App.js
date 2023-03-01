import React, { useState } from 'react';

import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Bitcoin',
    amount: 24708.95,
    date: new Date(2023, 1, 14),
  },
  { 
    id: 'e2',
    title: 'Air', 
    amount: 0, 
    date: new Date(2023, 1, 12) 
  },
  {
    id: 'e3',
    title: 'Car',
    amount: 13999.99,
    date: new Date(2023, 2, 19),
  },
  {
    id: 'e4',
    title: '?',
    amount: "?",
    date: new Date(2023, 0, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

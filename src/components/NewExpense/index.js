import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './index.css';

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleShowAddNewExpenseForm = () => {
    setIsAdding(true);
  }
  const OnCloseForm = () => {
    setIsAdding(false);
  }

  const onHandleNewExpenseData = (enteredExpenseData) => {
    const expenseItem = {
      title: enteredExpenseData.enteredTitle,
      amount: enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
      id: Math.random().toString()
    };
    props.handleAddNewExpenseItem(expenseItem);
    setIsAdding(false);
  }
  return (
    <div className='new-expense'>
      {!isAdding && (
        <button onClick={handleShowAddNewExpenseForm}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onHandleNewExpenseData={onHandleNewExpenseData}
          OnCloseForm={OnCloseForm}
        />
      )}
    </div>
  );
}

export default NewExpense;

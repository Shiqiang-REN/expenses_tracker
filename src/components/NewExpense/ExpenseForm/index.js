import React, {useState} from 'react';
import './index.css';

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onHandleNewExpenseData(userInput);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }


  const handleUserInput = (type) => {
    return (event) => {
      setUserInput({...userInput,[type]:event.target.value})
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={handleUserInput('enteredTitle')}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.enteredAmount}
            onChange={handleUserInput('enteredAmount')}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            value={userInput.enteredDate}
            onChange={handleUserInput('enteredDate')}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.OnCloseForm}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

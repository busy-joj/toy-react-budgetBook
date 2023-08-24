import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

import './ExpenseList.css';

const ExpenseList = ({ fakeData, handleDelete, handleEdit, clearItems}) => {
  return (
    <>
      <ul className='list'>
          {fakeData.map( expense => {
            return (
              <ExpenseItem 
                key={expense.id}  
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
          })}
          
      </ul>
      {fakeData.length > 0 && (
        <button 
          className='btn'
          onClick={clearItems}
        >
          목록 전체 지우기
          <MdDelete className='btn-icons' />
        </button>
      )}

    </>
  )
}

export default ExpenseList

import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

import './ExpenseList.css';

export class ExpenseList extends Component {
  render() {
    console.log(this.props.fakeData)
    return (
      <>
        <ul className='list'>
            {this.props.fakeData.map( expense => {
              return (
                <ExpenseItem 
                  key={expense.id}  
                  expense={expense}
                  handleDelete={this.props.handleDelete}
                />
              )
            })}
            
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icons' />
        </button>
      </>
    )
  }
}

export default ExpenseList

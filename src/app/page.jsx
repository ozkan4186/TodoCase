"use client"

import InputForm from '@/components/InputForm'
import Todolist from '@/components/Todolist'
import React, { Component } from 'react'

export default class page extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-control">
          <h2 className="text">Todo Case</h2>
          <div className='form' >
            <div className="main">
              <InputForm />
              <Todolist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

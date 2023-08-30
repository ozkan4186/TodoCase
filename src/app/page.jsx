"use client"

import React, { Component } from "react";
import InputForm from "@/components/InputForm";
import TodoList from "@/components/TodoList";

const url = "https://64ee12191f8721827142447f.mockapi.io/todos";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await this.fetchData(url);
      this.setState({ todos: response });
    } catch (error) {
      console.error(error);
    }
  }

  fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="form-control">
          <h2 className="text">Todo Case</h2>
          <div className="form">
            <div className="main">
              <InputForm />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;

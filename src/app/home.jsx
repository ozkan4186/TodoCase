"use client"

import React, { useState, useEffect } from "react";
import InputForm from "@/components/InputForm";
import TodoList from "@/components/TodoList";

const url = "https://64ee12191f8721827142447f.mockapi.io/todos";

const Home = ({ todos }) => {
  // Verileri state içinde yönetmek için useState kullanın
  const [todoData, setTodoData] = useState(todos);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTodoData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen ilk yüklendiğinde çalışır

  return (
    <div className="container">
      <div className="form-control">
        <h2 className="text">Todo Case</h2>
        <div className="form">
          <div className="main">
            <InputForm />
            <TodoList todos={todoData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todos = await response.json();

    return {
      props: {
        todos,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        todos: [],
      },
    };
  }
}

export default Home;

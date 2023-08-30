"use client"

import React, { useState, useEffect } from "react";
import InputForm from "@/components/InputForm";
import Todolist from "./Todolist";
import axios from "axios";

const url = "https://64ee12191f8721827142447f.mockapi.io/todos";

const Home = ({ todos }) => {
  // Verileri state içinde yönetmek için useState kullanın
  const [todoData, setTodoData] = useState(todos);

  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const addTodo = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      fetchData().then((data) => setTodoData(data));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      fetchData().then((data) => setTodoData(data));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      fetchData().then((data) => setTodoData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setTodoData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="form-control">
        <h2 className="text">Todo Case</h2>
        <div className="form">
          <div className="main">
            <InputForm addTodo={addTodo} />
            <Todolist
              todos={todoData}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
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
      revalidate: 30, // Sayfanın yeniden oluşturulma sıklığı (saniye cinsinden), örnekte 30 saniye (her 30 saniyede bir) olarak ayarlandı. Verileri 30 saniyede bir güncellesin.
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

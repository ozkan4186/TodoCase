"use client"

import React, { useState } from 'react'
import axios from 'axios';

//todo ile ilgili fonksiyonları custom hooksta topladık
const useAxios = () => {
    const [todos, setTodos] = useState([])
    const getTodos = async () => {
        const { data } =
          (await axios.get) >
          "https://64ee12191f8721827142447f.mockapi.io/api/todos";//gelen response a göre belirledik bu ne işe yarıyor gelen datanın fieldlarına erişebiliyoruz
        // console.log(data)
        setTodos(data)
    }
    const addTodo = async (text) => {
        const newTodo = {
            task: text,
            isDone: false
        }
        const { data } =
          (await axios.post) 
          ("https://64ee12191f8721827142447f.mockapi.io/api/todos", newTodo);
        if (data) {
            getTodos()
        }
    };

    const toggleTodo= async (item) => {
        const updateTodo = {
            id: item.id,
            task: item.task,
            isDone: !item.isDone
        }
        const { data } =
          (await axios.put) 
          (`https://64ee12191f8721827142447f.mockapi.io/api/todos/${item.id}`,
          updateTodo);
        if (data) {
            getTodos()
        }
    }
    const deleteTodo= async (id) => {
        try {
            const res = await axios.delete(
              `https://64ee12191f8721827142447f.mockapi.io/api/todos/${id}`
            );
            console.log(res)
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }
    return { getTodos, addTodo, deleteTodo, toggleTodo }
}

export default useAxios
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import ToDo from './components/ToDo';

function App() {
  const [todo, setTodo] = useState([]);

  const handleChange = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    );
  };

  const addTodoProps = (title) => {
    setTodo([...todo, {
      id: uuidv4(),
      task: title,
      completed: false,
    }]);
  };

  const deleteItems = (id) => {
    setTodo(todo.filter((item) => (item.id !== id ? item : false)));
  };

  const setUpdate = (newTitle, id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          item.task = newTitle;
        }
        return item;
      }),
    );
  };

  return (
    <>
      <Header />
      <InputTodo addTodoProps={addTodoProps} />
      <ToDo
        todo={todo}
        handleChange={handleChange}
        deleteItems={deleteItems}
        setUpdate={setUpdate}
      />
    </>
  );
}

export default App;

import React from 'react';
  
  
  const TodoList = ({items, remove}) => {
      const todoNode = items.map((todo) => {
          return (<li key={todo.id} onClick={() => remove(todo.id)}>{todo.text}</li>);
      });
      return (
        <ul>{todoNode}</ul>
      );
    }
  
  
  export default TodoList;
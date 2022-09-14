import React, { useState, useEffect } from 'react';

export default function ShowTodo() {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const res = await fetch('http://localhost:5001/todos', {
        method: 'GET',
      });
      const data = await res.json();
      setList(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  const removeTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE',
      });
      alert(res.statusText);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.description}</p>
          <button onClick={() => removeTodo(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

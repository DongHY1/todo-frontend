import React, { useState, useEffect } from 'react';
import EditTodo from './EditTodo';

export default function ShowTodo() {
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
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
  const handleEditCick = (id) => {
    setIsEdit(!isEdit);
    setId(id);
  };
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.description}</p>
          <button onClick={() => removeTodo(item.id)}>Remove</button>
          <button onClick={() => handleEditCick(item.id)}>Edit</button>
        </div>
      ))}
      {isEdit && <EditTodo id={id} />}
    </div>
  );
}

import React, { useState } from 'react';

export default function InputTodo() {
  const [desc, setDesc] = useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description: desc };
      const res = await fetch('http://localhost:5001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          name="search"
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button>Add!</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';

export default function EditTodo({ id }) {
  const [desc, setDesc] = useState('');
  const handleEditClick = async () => {
    try {
      const body = { description: desc };
      debugger;
      const res = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      alert('修改成功');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="edit"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button onClick={handleEditClick}>Submit Edit</button>
    </div>
  );
}

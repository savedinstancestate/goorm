import React, { useState } from 'react';

function CreateMemo({ addMemo }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    addMemo({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Memo</button>
    </form>
  );
}

export default CreateMemo;

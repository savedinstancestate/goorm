import React, { useState } from 'react';

function Memo({ memo, deleteMemo, updateMemo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(memo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateMemo(memo.id, { ...memo, text: editedText });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={e => setEditedText(e.target.value)}
        />
      ) : (
        <span>{memo.text}</span>
      )}
      <button onClick={() => deleteMemo(memo.id)}>Delete</button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default Memo;

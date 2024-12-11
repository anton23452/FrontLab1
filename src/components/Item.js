import React, { useState } from 'react';

function Item({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(item.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span>{item.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Item;
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ]);

  const addItem = (newItemText) => {
    setItems([...items, {
      id: items.length + 1,
      text: newItemText
    }]);
  };

  const editItem = (id, newText) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Item Manager</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList 
        items={items} 
        onEditItem={editItem}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
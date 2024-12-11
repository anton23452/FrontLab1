import React from 'react';
import Item from './Item';

function ItemList({ items, onEditItem, onDeleteItem }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item 
          key={item.id}
          item={item}
          onEdit={onEditItem}
          onDelete={onDeleteItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
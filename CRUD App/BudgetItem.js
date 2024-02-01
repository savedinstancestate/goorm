import React from 'react';

function BudgetItem({ item, onDelete, onEdit}) {
  return (
    <div className="budget-item">
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price}</div>
      <button className="editButton" onClick={() => onEdit(item)}>수정</button>
      <button className="deleteButton" onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}

export default BudgetItem;

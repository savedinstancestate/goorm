import React, { useState, useEffect } from 'react';

function BudgetForm({ onAddItem, onEditItem, editingItem, onCancelEdit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('0');
  const [quantity, setQuantity] = useState(1);

  // 수정할 항목이 변경될 때마다 실행되는 effect
  useEffect(() => {
    // 폼 필드에 수정할 항목의 데이터를 설정
    if (editingItem) {
      setName(editingItem.name);
      setPrice(editingItem.price.toString());
      setQuantity(editingItem.quantity.toString());
    } else {
      resetForm();
    }
  }, [editingItem]);

  const resetForm = () => {
    setName('');
    setPrice('0');
    setQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10)
    };

    if (editingItem) {
      onEditItem({ ...itemData, id: editingItem.id });
    } else {
      onAddItem(itemData);
    }
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-item">
        지출 항목<br />
        <input
          type="text"
          value={name}
          className="input"
          onChange={(e) => setName(e.target.value)}
          placeholder="예) 렌트비"
        />
      </div>
      <div className="input-item">
        비용<br />
        <input
          type="number"
          value={price}
          className="input"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="비용"
        />
      </div>
      <div className="input-item">
      </div>
      <button type="submit" className="addButton">
        {editingItem ? '수정' : '+ 추가'}
      </button>

    </form>
  );
}

export default BudgetForm;

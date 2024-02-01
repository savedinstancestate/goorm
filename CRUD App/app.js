import React, { useState } from 'react';
import 'App.css'; // 스타일을 위한 CSS 파일

function App() {
  const [entry, setEntry] = useState({ itemName: '', price: 0, amount: 1200 });
  const [totalPrice, setTotalPrice] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = () => {
    // 가격 계산 로직을 여기에 구현하십시오.
    // 예를 들어, amount와 price를 곱하는 등의 계산을 수행할 수 있습니다.
    const calculatedPrice = entry.amount * entry.price;
    setTotalPrice(calculatedPrice);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>예산 계산기</h1>
        <div>
          <label>지출 항목</label>
          <input
            type="text"
            name="itemName"
            value={entry.itemName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>비용</label>
          <input
            type="number"
            name="price"
            value={entry.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>시비</label>
          <input
            type="number"
            name="amount"
            value={entry.amount}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSubmit}>계산</button>
        <div>
          <span>총 지출: {totalPrice}원</span>
        </div>
      </div>
    </div>
  );
}

export default App;

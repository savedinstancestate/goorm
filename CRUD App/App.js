import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm";
import BudgetItem from "./BudgetItem";
import "./App.css";

function App() {
  const [budgetItems, setBudgetItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [totalBudget, setTotalBudget] = useState(0);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const onCancelEdit = () => {
    setEditingItem(null); // 수정 모드 해제
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert(false);
    }, 3000); // 3초 후 알림 숨김

    return () => clearTimeout(timeout);
  }, [alert.show]);

  // 항목 수정
  const onEditItem = (editedItem) => {
    const updatedItems = budgetItems.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setBudgetItems(updatedItems);
    setEditingItem(null); // 수정 모드 해제
    showAlert(true, "success", "항목이 수정되었습니다.");
  };

  useEffect(() => {
    updateTotal();
  }, [budgetItems]);

  const addBudgetItem = (item) => {
    if (editingItem) {
      setBudgetItems(
        budgetItems.map((it) =>
          it.id === editingItem.id ? { ...it, ...item } : it
        )
      );
      setEditingItem(null); // 수정 모드 종료
    } else {
      setBudgetItems([...budgetItems, { ...item, id: Date.now() }]);
      showAlert(true, "success", "항목이 추가되었습니다.");
    }
  };

  const deleteBudgetItem = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
    showAlert(true, "error", "항목이 삭제되었습니다.");
  };

  const startEditItem = (item) => {
    setEditingItem(item);
  };

  const updateTotal = () => {
    const total = budgetItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalBudget(total);
  };

  return (
    <div className="app">
      {alert.show && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <h1>예산 계산기</h1>
      <BudgetForm
        onAddItem={addBudgetItem}
        onEditItem={onEditItem}
        editingItem={editingItem}
        onCancelEdit={onCancelEdit}
      />
      {budgetItems.map((item) => (
        <BudgetItem
          key={item.id}
          item={item}
          onDelete={deleteBudgetItem}
          onEdit={startEditItem}
        />
      ))}
      <div className="total">총 지출: {totalBudget}원</div>
    </div>
  );
}

export default App;
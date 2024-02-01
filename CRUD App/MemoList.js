import React from 'react';
import Memo from './Memo';

function MemoList({ memos, deleteMemo, updateMemo }) {
  return (
    <div>
      {memos.map(memo => (
        <Memo
          key={memo.id}
          memo={memo}
          deleteMemo={deleteMemo}
          updateMemo={updateMemo}
        />
      ))}
    </div>
  );
}

export default MemoList;

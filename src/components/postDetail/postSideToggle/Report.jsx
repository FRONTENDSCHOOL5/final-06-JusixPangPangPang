import { useState } from 'react';

export default function Report() {
    console.log('Report 렌더링');
    const [visible, setVisible] = useState(false);
    // Todo
    // 신고하기 기능구현
    return (
        <>
            <button onClick={() => setVisible(!visible)}>신고 버튼</button>
            {visible && <button>신고하기</button>}
        </>
    );
}

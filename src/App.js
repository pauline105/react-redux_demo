import { useState } from 'react'
import All from './pages/All'
import Add from './pages/Add'
import Complete from './pages/Complete'
import NotComplete from './pages/NotComplete'
import Ongoing from './pages/Ongoing'
function App() {
  // 控制显示状态
  const [status, setStatus] = useState('all')
  return (
    <>
      <div className='App'>
        <Add></Add>
        {/* 全部 */}
        {status === 'all' && <All></All>}
        {/* 已完成 */}
        {/* { status === 'complete' && <Complete></Complete>} */}
        {/* 未完成 */}
        {status === 'notcomplete' && (
          <NotComplete></NotComplete>
        )}
        {/* 进行中 */}
        { status === 'ongoing' && <Ongoing></Ongoing>}
      </div>
      <button onClick={() => setStatus('all')}>全部</button>
      <button onClick={() => setStatus('complete')}>已完成</button>
      <button onClick={() => setStatus('notcomplete')}>未完成</button>
      <button onClick={() => setStatus('ongoing')}>进行中</button>
    </>
  )
}

export default App

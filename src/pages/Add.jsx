import React, { useState } from 'react'
import { connect } from 'react-redux'

function ComA(props) {
  const [inpuValue, setInpuValue] = useState('')
  const clickHandle = () => {
    setInpuValue('')
    props.action(inpuValue)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        onBlur={event => {
          setInpuValue(event.target.value)
          event.target.value = ''
        }}
      />
      <button onClick={() => clickHandle()}>add Todo List</button>
    </div>
  )
}
// 向reducer发送 发送请求必须通过dispatch 必须包含type属性
const mapDispatchToProps = dispatch => {
  return {
    action: value => {
      dispatch({
        type: 'all',
        title: value,
      })
    },
  }
}
// 第一个参数获取数据 第二个参数发送dispatch
export default connect(null, mapDispatchToProps)(ComA)

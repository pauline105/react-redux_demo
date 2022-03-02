import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function All(props) {
  useEffect(() => {
    console.log(props, 1)
  })
  // 修改状态
  const editStatus = (item, status) => {
    props.action(item.id, status)
  }
  return (
    <div>
      <ul>
        {props.todo?.map((item, index) => (
          <li key={index}>
            {item.title}
            <button
              onClick={() => {
                editStatus(item, 'complete')
              }}
            >
              已完成
            </button>
            <button
              onClick={() => {
                editStatus(item, 'notcomplete')
              }}
            >
              未完成
            </button>
            <button
              onClick={() => {
                editStatus(item, 'ongoing')
              }}
            >
              进行中
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    action: (id, status) => {
      dispatch({
        type: 'status',
        complete: status,
        id: id,
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(All)

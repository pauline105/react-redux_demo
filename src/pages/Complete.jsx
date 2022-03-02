import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function ComB(props) {
  useEffect(() => {
    console.log(props)
  })

  return (
    <div>
      <ul>
        {props.todo.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(ComB)

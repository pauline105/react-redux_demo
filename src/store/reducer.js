const todoList = {
  todo: [],
}
// reducer 数据处理中心
export const reducer = (state = todoList, action) => {
  console.log(action, state)
  switch (action.type) {
    case 'all': {
      const todo = [
        ...state.todo,
        { id: state.todo.length, title: action.title, complete: 'all' },
      ]
      const newState = Object.assign({}, state, { todo: todo })
      return newState
    }
    case 'status': {
      const todo = state.todo
        .map(item => {
          if (item.id === action.id) {
            item.complete = 'complete'
          }
          return item
        })
        .filter(item => item.complete !== action.complete)
      const newState = Object.assign({}, state, { todo: todo })
      return newState
    }
    default:
      return state
  }
}

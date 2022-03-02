import { createStore } from 'redux'
import { reducer } from './reducer'
// 共享数据的地方
export default createStore(reducer)

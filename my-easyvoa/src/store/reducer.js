import {  combineReducers  } from 'redux'
import { reducer as headerReducer } from '../components/header/'
import { reducer as homeReducer } from '../pages/home/'
import { reducer as detailReducer } from '../pages/detail/'
import { reducer as listReducer } from '../pages/list/'

const reducer = combineReducers({
     header: headerReducer,
     home: homeReducer,
     detail: detailReducer,
     list: listReducer
})

export default reducer
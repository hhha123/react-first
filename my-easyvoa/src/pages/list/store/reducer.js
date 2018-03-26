import { CHANGE_LIST }  from './actionTypes'

const defaultState = {
	list:[]
}

export default (state = defaultState, action) => {
	if(action.type === CHANGE_LIST) {
		return {
			...state,
			list:action.value
		}
	}
	return state
}
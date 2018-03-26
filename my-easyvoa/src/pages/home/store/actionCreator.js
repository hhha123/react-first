import * as actionTypes from './actionTypes'

export const changeList = (list) => ({
	type: actionTypes.CHANGE_LIST,
	value: list
})

export const getList  = () => {
	return (dispatch) => {
		fetch('/api/home.json')
		    	.then(res => res.json())
		    	.then(res => {
		    		if(res && res.ret && res.data){
		    			const action = changeList(res.data.list)
                        dispatch(action)
		    		}
		    	})
	}
}
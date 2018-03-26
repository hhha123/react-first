import * as actionTypes from './actionTypes'

export const changeList = value => ({
	type: actionTypes.CHANGE_LIST,
	value: value
})

export const openModal = () => ({
	type: actionTypes.OPEN_MODAL
})

export const hideModal = () => ({
	type: actionTypes.HIDE_MODAL
})

export const login = () => ({
	type: actionTypes.LOGIN
})

export const logOut = () => ({
	type: actionTypes.LOGOUT
})

export const getList = () => {
	return (dispatch) => {
	  fetch('/api/header.json')
    	.then(res => res.json())
    	.then(res => {
    		if(res && res.ret && res.data){
    			const action = changeList(res.data.list)
                dispatch(action)
    		}
     	})
	}
}

export const checkLogin = (user,pwd) => {
	return (dispatch) => {
		fetch('/api/login.json?user=' + user + '&pwd=' + pwd)
      	  .then(res => res.json())
      	  .then(res => {
      	  	 if(res && res.ret && res.data){
      	  	 	const action = login()
		        dispatch(action)
      	  	 }
      	  })
	}
} 

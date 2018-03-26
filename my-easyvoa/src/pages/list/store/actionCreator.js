import { CHANGE_LIST }  from './actionTypes'

export const changeList = data => ({
	type: CHANGE_LIST,
	value: data
})

export const getList = id => {
	return (dispatch) => {
		fetch('/api/list.json?id' +id)
		  .then(res => res.json())
		  .then(res => {
		  	  if(res && res.ret && res.data) {
		  	  	  const action = changeList(res.data.list)
		  	  	  dispatch(action)
		  	  }
		  })
	}
}
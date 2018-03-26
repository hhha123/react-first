import { connect } from 'react-redux' 
import { getList } from './store/actionCreator'
import List from './component'

const mapState  = state => ({
	list: state.list.list
})

const mapDispatch = dispatch =>({
	getList(id) {
		const action = getList(id)
	    dispatch(action)
	}
})

export default connect(mapState,mapDispatch)(List)


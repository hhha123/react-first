import { connect } from 'react-redux'
import Detail from './component'
import { getDetail } from './store/actionCreator'

const mapState = state => ({
	title: state.detail.title,
	date: state.detail.date,
	content: state.detail.content
})

const mapDispatch = dispatch => ({
	getDetail(id) {
		const action = getDetail(id)
		dispatch(action)
	}
})

export default connect(mapState,mapDispatch)(Detail)


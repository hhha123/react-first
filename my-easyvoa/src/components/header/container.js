import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'
import Header from './component'

const mapStateToProps = (state) => ({
	list: state.header.list,
	showModal: state.header.showModal,
	isLogin: state.header.isLogin
})

const mapDispatchToProps = (dispatch) => ({
	openModal() {
		const action = actionCreator.openModal()
		dispatch(action)
	},
	hideModal() {
		const action = actionCreator.hideModal()
		dispatch(action)
	},
	logOut() {
		const action = actionCreator.logOut()
		dispatch(action)
	},
	getList() {
		const action = actionCreator.getList()
		dispatch(action)
	},
	checkLogin(user,pwd) {
		const action = actionCreator.checkLogin(user,pwd)
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
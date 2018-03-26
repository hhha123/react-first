import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Button, Modal, Form, Input  } from 'antd'
import { Link } from 'react-router-dom'
import styles from './style.mcss'
const FormItem = Form.Item;

class Header extends Component {
   
    // shouldComponentUpdate(nextProps) {
    //     if(nextProps.list.length !== this.props.list.length) {
    //     	return true
    //     }else if(nextProps.isLogin !== this.props.isLogin){
    //     	return true
    //     }else {
    //     	return false
    //     }
    //}
	render() {
		const { getFieldDecorator } = this.props.form;
		const logo = require('../../assets/imgs/logo.png')
		const menuItems = this.props.list.map((item,index) => {
			return (
				<Menu.Item key={item.id} className={styles.item} >
			          <Link to={'/list/' + item.id}>
			              <Icon type="appstore" />{item.title}
			          </Link>
			    </Menu.Item>
			)
		}) 

		let button = null
		if(this.props.isLogin) {
            button = <Button type="primary" className={styles.button}  onClick={this.props.logOut}>退出</Button>
		}else{
             button = <Button type="primary" className={styles.button}  onClick={this.props.openModal}>登录</Button>
		}

		return (
		   <div>
	           <Row>
			      <Col span={4}>
			          <img alt="logo" src={logo} 
			          className={styles.logo} 
	                  onClick={this.handleClick.bind(this)}
			      />
			      </Col>
			      <Col span={18}>
			         <Menu mode="horizontal">
			            {menuItems}
			         </Menu>
			      </Col>
			      <Col span={2}>
	                 {button}
			      </Col>
			    </Row>
			    <Modal title="登录" 
			       visible={this.props.showModal}
		           onOk={this.handleSubmit.bind(this)} 
		           onCancel={this.props.hideModal}
		           okText='登录'
		           cancelText='取消'
		        >
		            <Form onSubmit={this.handleSubmit} className="login-form">
				        <FormItem>
				          {getFieldDecorator('user', {
				            rules: [{ required: true, message: '请填写用户名' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: '请填写密码' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
				          )}
				        </FormItem>
	      		    </Form>
		        </Modal>
		        <div className={styles.menu}>
			        <div style={{width:'115px'}} className={styles.menuLeft}>
			           <h2>常速英语</h2>
			           <ul>
			              <li>音频</li>
			              <li>视频</li>
			              <li>翻译</li>
			           </ul>
			        </div>
			        <div style={{width:'425px'}} className={styles.menuMiddle}>
			           <h2>常速英语</h2>
			           <ul>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			              <li>科技报道</li>
			           </ul>
			        </div>
			        <div style={{width:'482px'}} className={styles.menuRight}>
			           <h2>常速英语</h2>
			           <ul>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
                          <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			              <li>美语三级跳</li>
			           </ul>
			        </div>
			    </div>
		   </div>
		)
	}

    componentDidMount() {
    	this.props.getList()
    }

    handleClick() {
    	this.props.history.replace('/')
    }

    handleSubmit() {
        this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	this.props.checkLogin(values.user,values.password)
	      }
	    })
    }

}

export default Form.create()(Header)
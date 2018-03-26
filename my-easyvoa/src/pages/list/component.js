import React, { Component } from 'react'
import styles from './style.mcss'

export default class List extends Component {
 
    componentWillReceiveProps(nextProps) {
       if(nextProps.match.params.id !== this.props.match.params.id) {
           this.props.getList(nextProps.match.params.id)
       }
    }

	render() {
		const logo_studio = require('../../assets/imgs/studio_logo.png')
		const logo_ad = require('../../assets/imgs/studio_ad.gif')
		const navList = this.props.list.map((item,index) => {
			return  <li key={item.id}>{item.title}</li>
		})
		return (
			<div className={styles.wrapper}>
			   <div>
			       <img alt="studio" src={logo_studio}  className={styles.left} />
                   <img alt="ad" src={logo_ad}  className={styles.right} />
			   </div>
               <ul style={{height:'50px'}} className={styles.nav}>
                  <li>大家说英语</li>
                  <li>空中英语教室</li>
                  <li>彭蒙惠英语</li>
               </ul>
               <ol style={{marginTop:'30px'}}>
                   {navList}
               </ol>
			</div>
		)
	}

    componentDidMount() {
    	this.props.getList(this.props.match.params.id)
    }

}
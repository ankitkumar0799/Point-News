import React from 'react'
import loading from './loading.gif'

export default class Spinner extends React.Component {
	render() {
		return (
			<div  className=
			"text-center">
				<img style={{width:"40px"}} src={loading} alt="loading spinner"/>
			</div>
		)
	}
}
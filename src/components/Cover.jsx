import bg from '../images/bg-pink.png'
import '../styles/cover.css'
import { Icons } from './Icons'
import React from 'react'

export function Cover() {
	
	return (
		<>
			<img src={bg} className='cover' alt="background"/>
			<div className='content'>
				<p className='title'>Diego Sousa</p>
				<p className='description'>I’m a Full-Stack developer with focus on my objectives</p>
				<Icons />
			</div>
		</>
	)
}

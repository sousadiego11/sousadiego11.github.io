import bg from '../images/bg-pink.png'
import React from 'react'
import '../styles/cover.css'
import { Github } from './Github'
import { Linkedin } from './Linkedin'
import { Instagram } from './Instagram'

export function Cover() {
	
	return (
		<>
			<img src={bg} className='cover' alt="background"/>
			<div className='content'>
				<p className='title'>Diego Sousa</p>
				<p className='description'>I’m Full-Stack Junior Dev with focus in my objectives</p>
				<div className='icons'>
					<Linkedin className="icon"/>
					<Github className="icon"/>
					<Instagram className="icon" />
				</div>
			</div>
		</>
	)
}

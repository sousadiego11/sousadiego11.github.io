import { Github } from './Github'
import { Instagram } from './Instagram'
import { Linkedin } from './Linkedin'
import React from 'react'

export function Icons() {
	return (
		<div className='icons'>
			<a href='https://www.linkedin.com/in/sousadiego11/' onClick={() => console.log('a')}>
				<Linkedin className="icon"/>
			</a>
			<a href='https://github.com/sousadiego11'>
				<Github className="icon"/>
			</a>
			<a href='https://www.instagram.com/fs.diego/'>
				<Instagram className="icon" />
			</a>
		</div>
	)
}

import React from "react"
import '../styles/cover.css'

export function Instagram (props) {
  return (<svg
	xmlns="http://www.w3.org/2000/svg"
	width={48}
	height={48}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	strokeWidth={0.5}
	strokeLinecap="round"
	strokeLinejoin="round"
	className="feather feather-instagram"
	{...props}
 >
	<rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
	<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
 </svg>)
}
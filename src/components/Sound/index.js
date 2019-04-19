import React from 'react'

function Sound(props) {
	return (
		<audio autoPlay src={props.src} />
	)
}

export default Sound
import React from 'React'

function NavButton(props) {
	const handleClick = () => {
		const { transitionCallback } = props
		transitionCallback()
	}

	const { isDisabled } = props
	return(
		<button
			style={{padding:'1rem', backgroundColor:'white'}}
			onClick={handleClick}
			disabled={isDisabled}
		>
			<span className="visuallyhidden">Switch Step</span>
			test
		</button>
	)
}

export default NavButton
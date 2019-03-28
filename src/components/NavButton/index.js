import React from 'React'

function NavButton(props) {
	const handleClick = () => {
		const { transitionCallback } = props
		transitionCallback()
	}

	const { isDisabled, isTimerVisible } = props
	return(
		<button
			style={{padding:'1rem', backgroundColor:'white'}}
			onClick={handleClick}
			disabled={isDisabled}
		>
			<span className="visuallyhidden">Switch Step</span>
			{isTimerVisible ? 'Back' : 'Next'}
		</button>
	)
}

export default NavButton
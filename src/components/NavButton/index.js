import React from 'React'

import './index.styl'

function NavButton(props) {
	const handleClick = () => {
		const { transitionCallback } = props
		transitionCallback()
	}

	const { isDisabled, isLeft } = props
	return (
		<div className="NavButtonContainer">
			<div className={isLeft ? 'NavButtonState is-timer' : 'NavButtonState'} />
			<button className="NavButton" onClick={handleClick} disabled={isDisabled}>
				<span className="visuallyhidden">Switch Step</span>
				<svg
					className="navButtonIcon"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
				>
					<title>{isLeft ? 'Start Timer' : 'Go Back'}</title>
					<path fill="currentColor" d="M6 4l20 12L6 28z" />
				</svg>
			</button>
		</div>
	)
}

export default NavButton

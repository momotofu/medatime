import React from 'react'
import Interact from 'interactjs'
import './index.styl'

class RadialControl extends React.Component {
  onMove(event) {
   const target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  componentDidMount() {
    Interact(this.square)
      .draggable({
        onmove: this.onMove,
      })
  }

  render() {
    return (
      <div
        className='RadialControl-square'
        ref={ (el) => this.square = el }
       >
      </div>
    )
  }
}

export default RadialControl

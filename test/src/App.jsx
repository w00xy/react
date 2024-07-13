import { useRef, useState } from 'react'

import './App.css'

export default function App() {
  const [color, setColor] = useState('#FFFFFF');
  const colorRef = useRef()

  function handleColorChange(event) {
    setColor(event.target.value)
  }

  function handleColorPickerClick() {
    navigator.clipboard.writeText(color)
    const colorDiv = colorRef.current;
    colorDiv.innerText = 'Copied to clipboard'
    colorDiv.classList.add('clicked')
    setTimeout(() => {
      console.log('coppied');
      colorDiv.classList.remove('clicked')
      colorDiv.innerText = `Selected color: ${color}`
    },
      500
    )
  }

  return (
		<div className='color-picker-container'>
			<h1>Pick the color</h1>
			<div
				className='color-picker'
				style={{ backgroundColor: color }}
				onClick={handleColorPickerClick}
        ref={colorRef}
			>
				Selected color: {color}
			</div>
			<label>
				Select a color: <br />
				<input type='color' value={color} onChange={handleColorChange} />
			</label>
		</div>
	)
}

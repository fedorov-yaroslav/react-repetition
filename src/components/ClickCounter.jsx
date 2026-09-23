import { useState, useRef, useEffect } from 'react'

function ClickCounter() {

	const [history, setHistory] = useState([])
	const [limitShown, setLimitShown] = useState(false)
	const [indicator, setIndicator] = useState('')

	const myRef = useRef(0)

	function clearRef () {
		myRef.current = 0
		setHistory([])
		setLimitShown(false)
	}

	useEffect(() => {
		const id = setInterval(() => {
			setIndicator(myRef.current)
		}, 1000)

		return () => clearInterval(id)
	}, [])

	const clearAndShow = () => {
		myRef.current = 0
		alert(myRef.current)
	}

	const click = () => {
		myRef.current += 1
	}

	const save = () => {
		if (history.length < 10){
			setHistory(prev => [...prev, myRef.current])
		}
		if (history.length === 10 && !limitShown){
			alert('Достигнут лимит!');
			setLimitShown(true)
		}
	}

	return (
		<>
			<button onClick={click}>Кликнуть</button>
			<button onClick={() => {alert(myRef.current)}}>Показать</button>
			<button onClick={clearRef}>Сбросить</button>
			<button onClick={clearAndShow}>Сбросить и показать</button>
			<button onClick={save}>Сохранить значение</button>
			<p>Снапшоты: [{history.join(', ')}]</p>
			<h4>{indicator}</h4>
		</>
	)
}

export default ClickCounter
import { useCondition } from './ConditionContext.js' 

const CONDITION_THEMES = {
  'Включен': {
    bg: 'lightblue',
    text: '❄️ В комнате прохладно'
  },
  'Выключен': {
    bg: 'lightgray',
    text: '☀️ В комнате душно'
  }
}


export function Room () {
	const { status, toggleStatus } = useCondition()

	return (
		<div style={{backgroundColor: CONDITION_THEMES[status].bg, padding: '20px', borderRadius: '8px'}}>
			<button onClick={toggleStatus}>Переключить</button>
			<p>{CONDITION_THEMES[status].text}</p>
		</div>
	)
}
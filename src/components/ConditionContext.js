import { createContext, useContext } from 'react'

//Проверить на файле, где я планирую использовать контекст, чтобы фигурные скобки были или не были
export const ConditionContext = createContext('Выключен')

export function useCondition () {
	const context = useContext(ConditionContext)
	if (!context){
		throw new Error('useCondition должен использоваться строго внутри ConditionProvider!')
	}
	
	return context
}
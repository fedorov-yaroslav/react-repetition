import { useEffect, useRef } from 'react';

function SearchBar() {

  const searchRef = useRef(null)

  const handleFocus = () => {
    searchRef.current?.focus()
  }

  const clearFocus = () => {
    searchRef.current.value = ''
    searchRef.current?.focus()

  }

  useEffect(() => {
    searchRef.current?.focus()  
  }, [])

  return (
    <>
      <input type="text" placeholder='Введите поисковой запрос...' ref={searchRef} />
      <button onClick={handleFocus}>Сфокусироваться</button>
      <button onClick={clearFocus}>Очистить</button>
    </>
  );
}

export default SearchBar
function Layout({ title, children }) {
  return (
      <>
        <h1>{ title }</h1>
        { children }
      </>
  )
}

export default Layout
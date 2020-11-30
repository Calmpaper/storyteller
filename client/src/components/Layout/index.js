import { useLocation, useRouteMatch } from 'react-router-dom'
import BackButton from './BackButton'
import Menu from './Menu'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const match = useRouteMatch('/:story')

  return (
    <>
      {children}
      {(pathname !== '/' && !match) ||
        (match && !match.isExact && <BackButton />)}
      {match && match.isExact && pathname !== '/login' && <Menu />}
    </>
  )
}

export default Layout

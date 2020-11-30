import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
// import { useQuery } from 'urql'
// import { getMeQuery } from 'api'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: window.localStorage.getItem('email'),
  })
  const [jwt, setJwt] = useState(window.localStorage.getItem('jwt'))
  const [isLogged, setLogged] = useState(!!window.localStorage.getItem('email'))
  const { push, replace } = useHistory()

  if (!isLogged) {
    push('/login')
  }

  // const [{ data: { me: user } = {}, fetching }, reexecuteQuery] = useQuery({
  //   query: getMeQuery,
  //   pause: !jwt,
  // })

  const signup = (token) => {
    window.localStorage.setItem('jwt', token)
    setJwt(token)
    replace('/')
  }

  const logout = () => {
    window.localStorage.removeItem('jwt')
    setJwt(null)
    replace('/login')
  }

  const login = (token, email) => {
    window.localStorage.setItem('jwt', token)
    window.localStorage.setItem('email', email)
    setUser({ email })
    setJwt(token)
    replace('/')
  }

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        signup,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider as default, UserContext }

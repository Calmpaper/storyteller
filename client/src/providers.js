import UserProvider from 'context/UserContext'
import StoriesProvider from 'context/StoriesContext'
import CharactersProvider from 'context/CharactersContext'
import OthersProvider from 'context/OthersContext'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as URQLProvider, createClient } from 'urql'

const urqlClient = createClient({
  url: process.env.REACT_APP_BACKEND_URL,
  fetchOptions: () => {
    const token = window.localStorage.getItem('jwt')

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
})

const Providers = ({ children }) => (
  <URQLProvider value={urqlClient}>
    <RouterProvider>
      <UserProvider>
        <StoriesProvider>
          <CharactersProvider>
            <OthersProvider>{children}</OthersProvider>
          </CharactersProvider>
        </StoriesProvider>
      </UserProvider>
    </RouterProvider>
  </URQLProvider>
)

export default Providers

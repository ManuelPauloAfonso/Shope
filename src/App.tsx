import { ModalContext, Provider} from './context'
import Routes from './routes'
import { GlobalStyle } from './styles/global'
import { useContext } from 'react'

function App() {
    const {modalIsOpen,setIsOpen} = useContext(ModalContext)
  return (


    <Provider>
      <GlobalStyle />
      <Routes />
    </Provider>
  )
}

export default App

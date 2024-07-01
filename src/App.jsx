import './App.css'
import { Header } from './components/header'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {

  return (
   <>
   <Provider store={store}>
    {/* <br /> */}
   <Header />
   </Provider>
   </>
  )
}

export default App

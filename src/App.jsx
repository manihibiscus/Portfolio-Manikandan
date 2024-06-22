import './App.css'
import { Content } from './components/content'
import { Header } from './components/header'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {

  return (
   <>
   <Provider store={store}>
    {/* <br /> */}
   <Header />
   <Content />
   </Provider>
   </>
  )
}

export default App

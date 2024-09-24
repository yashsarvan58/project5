import { Provider } from "react-redux"
import PageRoutes from "./Routes/PageRoutes"
import Store from "./Slice/Store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// type Props = {}

const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <PageRoutes/>
      </Provider>
      <ToastContainer/>
    </div>
  )
}
  
  export default App
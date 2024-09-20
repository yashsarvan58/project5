import { Provider } from "react-redux"
import PageRoutes from "./Routes/PageRoutes"
import Store from "./Slice/Store"

// type Props = {}

const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <PageRoutes/>
      </Provider>

    </div>
  )
}
  
  export default App
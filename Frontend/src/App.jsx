import Nav from "./components/Nav"
import MainRoutes from "./routes/MainRoutes"
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="app-container">
    <Nav/>
    <MainRoutes/>
     <ToastContainer position="top-center" autoClose={1500} />
    </div>
  )
}

export default App
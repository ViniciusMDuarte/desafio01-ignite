import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { Footer } from './components/Footer';


export function App() {
  return (
    <>
      <Header />
      <TaskList />
      <Footer />
    </>
  )
}
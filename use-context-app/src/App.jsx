import HeaderComponent from './components/HeaderComponent'
import './App.css'
import { useTheme } from './components/ThemeProvider'
import ExtensionListComponent from './components/ExtensionListComponent'
import Footer from './components/Footer'

function App() {
  const { darkTheme, toggleTheme } = useTheme()
  return (
    <div className='h-screen overflow-auto bg-[hsl(227,75%,14%)] text-white dark:bg-gray-200'>
      <div className='h-screen mr-10 ml-10 xl:ml-50 xl:mr-50 xl:pt-10 '>
        <HeaderComponent />
        <ExtensionListComponent />
        <Footer />
      </div>
    </div>
  )
}

export default App

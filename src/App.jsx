import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-0">
        <Header />
      </div>
      <div className="flex-1 overflow-auto">
        <ProductList />
      </div>
    </div>
  )
}

export default App

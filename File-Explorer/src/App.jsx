import './App.css'
import { useState } from 'react'
import explorer from './data'
import { Folder } from './components/Folder'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  // console.log(explorerData)

  return (
    <div className="App">
      <Folder explorerData={explorerData} />
    </div>
  )
}

export default App

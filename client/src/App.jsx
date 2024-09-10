import Twitch from "./components/Battles/Twitch/Twitch"
import Home from "./components/Battles/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Comics from "./components/Battles/Comics/Comics"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/twitch" element={<Twitch />} />
      <Route path="/comics" element={<Comics />} />


    </Routes>
  )
}

export default App

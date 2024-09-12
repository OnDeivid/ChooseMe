import Twitch from "./components/Battles/Twitch/Twitch"
import Home from "./components/Battles/Home/Home"
import { Route, Routes } from 'react-router-dom'
import Comics from "./components/Battles/Comics/Comics"
import Lol from "./components/Battles/Streamers/Lol"
import Cars from "./components/Battles/Cars/Cars"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/twitch" element={<Twitch />} />
      <Route path="/lol" element={<Lol />} />
      <Route path="/csgo" element={<Lol />} />


      <Route path="/comics" element={<Comics />} />

      <Route path="/cars" element={<Cars />} />



    </Routes>
  )
}

export default App

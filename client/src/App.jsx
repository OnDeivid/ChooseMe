import { Route, Routes } from 'react-router-dom'

import Twitch from "./components/Battles/Twitch/Twitch"
import Home from "./components/Battles/Home/Home"
import Comics from "./components/Battles/Comics/Comics"
import Lol from "./components/Battles/Streamers/Lol"
import Cars from "./components/Battles/Cars/Cars"
import LoadingDataComponent from './components/Loading/LoadingDataComponent'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/twitch" element={<Twitch />} />
      <Route path="/lol" element={<Lol />} />
      <Route path="/csgo" element={<Lol />} />


      <Route path="/comics" element={<Comics />} />


      <Route path="/waitingData..." element={<LoadingDataComponent />} />

      <Route path="/goat" element={<Cars />} />



    </Routes>
  )
}

export default App

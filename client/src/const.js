import twitch from '../src/assets/dTwitch.png'
import comics from '../src/assets/marvelDC.png'
import onlyfans from '../src/assets/brands.jpg'

import kesha from '../src/assets/kesha1.jpg'
import vs from '../src/assets/vs.png'
import bausff from '../src/assets/baus.webp'

const sectionsData = [
    { name: 'twitch', image: twitch, },
    { name: 'comics', image: comics, },
    { name: 'cars', image: onlyfans }
]



const twitchCategory = [
    { name: 'League of Legends', image: 'https://purepng.com/public/uploads/large/league-of-legends-new-logo-wg7.png', },
    { name: 'Counter-Strike', image: 'https://logos-world.net/wp-content/uploads/2023/02/CSGO-Logo-500x281.png' },

]
//https://img.freepik.com/premium-vector/comic-versus-background-with-lightning-vector-illustration_171739-903.jpg?w=900
const comicsCategory = [
    { name: 'BATMAN', image: 'https://i.redd.it/pdvfd99c00p31.jpg', },
    { name: 'vs', image: vs },
    { name: 'SPIDERMAN', image: 'https://i.pinimg.com/736x/00/32/f4/0032f4c1d02b7c52660c69824474d129.jpg' },

]

const streamersCompare = [
    { name: 'THEBAUSFFS', image: bausff, },
    { name: 'vs', image: vs },
    { name: 'TYLER1', image: 'https://i1.sndcdn.com/artworks-000287679830-pdgd4c-t500x500.jpg', },
    { link: true },

]


const carsCompare = [
    { name: 'AUDI RS6', image: 'https://img.freepik.com/premium-photo/matte-black-audi-rs6-abt-sedan-parked-volcano_738944-3.jpg', },
    { name: 'vs', image: vs },
    { name: 'BMW M4', image: 'https://paultan.org/image/2024/05/2024-BMW-M4-CS-debut-75-850x1275.jpg', },
]

// const battles = [
//     { name: 'League of Legends', image: 'https://purepng.com/public/uploads/large/league-of-legends-new-logo-wg7.png', },
//     { name: 'Counter-Strike', image: 'https://logos-world.net/wp-content/uploads/2023/02/CSGO-Logo-500x281.png' },
// ]

export default { sectionsData, twitchCategory, comicsCategory, streamersCompare, carsCompare }
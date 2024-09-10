import { useState } from 'react'
import shadow from '../../assets/shadow6.png'
import { useNavigate } from 'react-router-dom'

import './Category.css'


export default function Category({ row, battles, sectionsData }) {

    const [data, setData] = useState(() => battles || sectionsData)
    const navigate = useNavigate();

    return (
        <main className='main-container'>

            <div className='content-container'>
                <div className='catalog-section'>

                    {data.map((category, i) => {
                        return (
                            <div key={category.name} onClick={() => { navigate(`/${row[i]}`) }} className={`catalog-item ${row[i]}-item`}>
                                <div className='logo-container'>
                                    <img className={`logo-image ${row[i]}-logo`} src={category.image} />
                                    <img className='shadow-overlay' src={shadow} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', bottom: '0px' }}></div>
            <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', top: '0px' }}></div>
        </main>
    )
}

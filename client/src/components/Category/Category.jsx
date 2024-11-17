import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import shadow from '../../assets/shadow6.png'

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
                    <div className='clearData' style={{ backgroundColor: 'red', color: 'red' }} onClick={() => localStorage.clear()} >here</div>
                    <div className='topADS'></div>
                    <div className='bottomADS-category'></div>
                </div>

            </div>


        </main>
    )
}

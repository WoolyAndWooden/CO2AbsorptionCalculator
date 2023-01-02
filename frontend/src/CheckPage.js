import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'


export default function CheckPage() {

    const location = useLocation()
    const [choiceList, setChoiceList] = useState(location.state.state)
    const [result, setResult] = useState(0)
    const buttonRef = useRef(null);

    function callApi() {
        axios.get('http://localhost:8080/calculate', {
            params: {
                forest: choiceList[0].tag,
                area: choiceList[1].value,
                age: choiceList[2].value,
                habitat: choiceList[3].value,
                degree: choiceList[4].percentage,
                soil: choiceList[5].tag,
                reservoir: choiceList[6].tag,
                land: choiceList[7].tag,
                location: choiceList[8].value,
            }
        })
        .then(result => setResult(result.data))
        .catch(error => console.log(error))
    
    }
    
    return (
    <div>
        <div className="centerdiv">
            <h2>Wybrane Opcje:</h2>
            <form className='next'>
                <div className='column'>
                    <label>Las</label>
                    <label>Pole powierzchni</label>
                    <label>Wiek</label>
                    <label>Siedlisko</label>
                    <label>Stopień</label>
                    <label>Gleba</label>
                    <label>Rezerwy Wody</label>
                    <label>Ukształtowanie terenu</label>
                    <label>Lokacja</label>
                </div>
                <div className='column'>
                {choiceList.map(element => (
                    <div >
                        <div>{element.value}</div>
                    </div>             
                ))}
                </div>
            </form>
            <div>
                <label>Wynik</label>
                <div>{result}</div>
            </div>
            
            <button ref={buttonRef} onClick={callApi}>Oblicz</button>

                <Link to={{
                        pathname: '/',
                    }}>Wróć do początku</Link>
        </div>
    </div>
  )
}

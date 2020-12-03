import React from 'react'
import {useEffect, useState} from "react"
import './MusicTheory.scss'

const MIN = 1
const MAX = 7

const MusicTheory = () => {

    const [keys, setKeys] = useState(null)
    const [selectedKey, setSelectedKey] = useState('C')
    const [numbers, setNumbers] = useState([])
    const [currentNumber, setCurrentNumber] = useState(null)
    const [selectedNumbers, setSelectedNumbers] = useState([])

    useEffect(() => {
        setKeys(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
        setNumbers([1, 2, 3, 4, 5, 6, 7])
        setCurrentNumber(1)
    }, [])

    const reset = e => {
        const selectedKey = e.target.value

        setKeys(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
        setNumbers([1, 2, 3, 4, 5, 6, 7])
        setCurrentNumber(1)
        setSelectedKey(selectedKey)
    }

    const getRandomNumber = () => {

        let randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

        let newSelectedNumbers = [...selectedNumbers]

        if (newSelectedNumbers.length > 7) {
            newSelectedNumbers = []
        }

        while (randomNumber === currentNumber || newSelectedNumbers.includes( randomNumber )) {
            randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

            if (newSelectedNumbers.length === 7) {
                newSelectedNumbers = []
            }
        }

        newSelectedNumbers.push( randomNumber )
        setSelectedNumbers(newSelectedNumbers)

        setCurrentNumber( randomNumber )
    }

    const renderKeyChoices = () => {
        if (keys) {
            return keys.map(val => <option key={val} value={val}>{val}</option>)
        }
        return null
    }

    return (
        <div className={"music-theory"}>
            <div className="number"></div> <br/>
            <select onChange={e => reset(e)} className={"keys"} value={selectedKey} name="" id="">
                {renderKeyChoices()}
            </select>

            <br/>
            <p className={"number"} onClick={() => getRandomNumber()}>{currentNumber}</p>
        </div>
    )
}

export default MusicTheory

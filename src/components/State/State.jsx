import React, { useState } from 'react'
import './State.css'

const State = () => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const [img, setImg] = useState(false)
    const [open, setOpen] = useState('open')

    const minus = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const plus = () => {
        if (num < 10) {
            setNum(num + 1)
        }
    }

    const change = () => {
        setImg(!img)
        setOpen(img ? 'open' : 'close')
    }

    return (
        <>
            <div className="box">
                <button onClick={change}> {open} Image</button>
                {img && (
                    <img src='https://studyindenmark.dk/why-denmark/quality-of-life-1/about-denmark/image_large' alt=''/>
                )}
            </div>

            <div className="box">
                <h2>{text}</h2>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="box">
                <h2>{num}</h2>
                <button onClick={plus}>добавить число</button>
                <button onClick={minus}>уменьшить число</button>
                <button onClick={() => setNum(num * 2)}>удвоить число</button>
                <button onClick={() => setNum(num / 2)}>разделить число</button>
                <button onClick={() => setNum(0)}>обнулить число</button>
            </div>


        </>
    )
}

export default State

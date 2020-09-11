import React from 'react'
import style from './btn.module.css'

let NumBtn = ({ num, setnum, min, max, update, type }) => {
    if (num > max) {
        window.alert('You have exceeded the maximum value')
        setnum(num - 1)
    }

    if (num < min) {
        window.alert('You have exceeded the minimum value')
        setnum(num + 1)
    }

    return (
        <div className={style.numBtn}>
            <div
                onClick={() => {
                    setnum(num - 1)
                    update(type, num - 1)
                }}
                className={style.btn}
            >
                -
            </div>
            <div className={style.txt}>{num}</div>
            <div
                onClick={() => {
                    setnum(num + 1)
                    update(type, num + 1)
                }}
                className={style.btn}
            >
                +
            </div>
        </div>
    )
}

export default NumBtn

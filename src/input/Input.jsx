import React, {useState} from "react";
import s from './Input.module.scss'
import logo from '../logo.svg'
import cn from 'classnames'
// hasButton -boolean
const Input = ({ hasButton })=>{
    let [value, setValue] = useState(null)


    return <div className={cn(s.inputContainer, !value && s.inputContainerEmpty)}>
        <div className={s.inputWr}>
            {value ? <label htmlFor="surname" className={s.inputLabel}>Фамилия</label> : null}
            <input type="text" name={'surname'} className={s.inputVal} placeholder={'Фамилия'} onChange={(evt)=>setValue(evt.target.value)}/>
        </div>

        {hasButton ? <div className={s.inputIconWr}>
            <button className={s.inputBtn}>
                <img src={logo} alt="" className={s.inputIcon}/>
            </button>
        </div>: <></>}
    </div>
}

export default Input

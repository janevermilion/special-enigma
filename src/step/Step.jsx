import s from './Step.module.scss'
//type  - current | done  | disabled
import cn from 'classnames'
import logo from './../logo.svg';

export const Step = ({type}) => {
    const getModifier = (type, element)=>{
        if(element === 'state'){
            switch (type){
                case 'current':
                    return s.stepStateCurr
                case 'done':
                    return s.stepStateDone
                case 'disabled':
                    return s.stepStateDisabled
            }
        }
        else if(element === 'status' && type === 'disabled')
            return s.stepStatusDisabled
    }
    return <div className={s.stepWr}>
        <div className={cn(s.stepState, getModifier(type, 'state'))}>
            {type === 'done' ? <img src={logo} alt=""/> :  2}
        </div>
        <p className={cn(s.stepStatus, getModifier(type, 'status'))}>Заявление на анкету</p>


    </div>
}

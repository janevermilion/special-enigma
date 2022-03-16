import s from './Radio.module.scss'
import cn from 'classnames'
//вместо галочки импортировать свгшку с гало
const Radio=()=>{
    return <div className="control-group">
        <label className={cn(s.control, s.controlRadio)}>
            First radio
            <input type="radio" checked="checked"/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlRadio)}>
            Second radio
            <input type="radio"/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlRadio)}>
            Third radio
            <input type="radio"/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlRadio)}>
            Disabled
            <input type="radio" disabled="disabled"/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlRadio)}>
            Disabled & checked
            <input type="radio" disabled="disabled" checked="checked"/>
            <div className={s.controlIndicator}></div>
        </label>
    </div>
}

export default Radio

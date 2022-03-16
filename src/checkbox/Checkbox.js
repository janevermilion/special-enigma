import s from './Checkbox.module.scss'
import cn from 'classnames'
//вместо галочки импортировать свгшку с галочкой
const Checkbox=()=>{
    return <div className="control-group">
        <label className={cn(s.control, s.controlCheckbox)}>
            First checkbox
            <input type="checkbox" checked="checked" name={'cat'}/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlCheckbox)}>
            Second checkbox
            <input type="checkbox"  name={'cat'}/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlCheckbox)}>
            Third checkbox
            <input type="checkbox"  name={'cat'}/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlCheckbox)}>
            Disabled
            <input type="checkbox" disabled="disabled"  name={'cat'}/>
            <div className={s.controlIndicator}></div>
        </label>
        <label className={cn(s.control, s.controlCheckbox)}>
            Disabled & checked
            <input type="checkbox" disabled="disabled" checked="checked"/>
            <div className={s.controlIndicator}></div>
        </label>
    </div>
}

export default Checkbox

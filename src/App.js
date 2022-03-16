import logo from './logo.svg';
import  './App.scss';
import Input from "./input/Input";
import {Step} from "./step/Step";
import Checkbox from "./checkbox/Checkbox";
import Radio from "./Radio/Radio";

function App() {
  return (
    <div className={'App'}>
        <div style={{display:'flex', marginBottom:'30px'}}>
            <Step type={'current'}/>
            <Step type={'done'}/>
            <Step type={'disabled'}/>
        </div>
        <div style={{display:'flex', marginBottom:'30px'}}>
            <Input hasButton={false}/>
            <Input hasButton={true}/>
        </div>
        <Checkbox/>
        <div style={{display:'flex', marginBottom:'30px'}}/>
        <Radio/>
    </div>
  );
}

export default App;

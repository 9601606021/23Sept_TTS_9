import logo from './logo.svg';
import './App.css';
import FirstComponents from './Component/FirstComponents';
import Seconds from './Component/Seconds';
import MyClassComponent from './Component/MyClassComponent';
import { FunctionalComponent } from './Component/FunctionalComponent';
import { FunctionalComponetwithCount } from './Component/FunctionalComponetwithCount';

const array = [10,20,30,40]
function App() {
  return (
    <div className="App">
      My first React Project
      {/* <FirstComponents /> */}
      <Seconds myName="Manan" id="104" myarray={array}/>
      {/* <MyClassComponent /> */}
      <FunctionalComponent/>
      <FunctionalComponetwithCount />
    </div>
  );
}

export default App;

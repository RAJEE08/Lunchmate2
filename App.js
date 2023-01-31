import { LogIn  }from './LogIn';
import {Forget} from './Forget';
import { NewPassword } from './NewPassword';
import { SignUp } from './SignUp';
import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/NewPassword" element={<NewPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;                                                                                                                                                                                                   

import './App.css';
import Contactform from './Components/Contactform/Contactform';
import Contactheader from './Components/Contactheader/Contactheader';
import Navbar from './Components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <main className="main_container">
     <Contactheader/>
     <Contactform />
     </main>
    </div>
  );
}

export default App;

import './App.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Navbar from '../components/navbar';
import Rotas from './rotas';

function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
          <Rotas/>
        </div>
    </>
  );
}

export default App;

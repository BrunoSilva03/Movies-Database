import RoutesApp from './routes';
import './App.css';
import Footer from './layoult/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <ToastContainer autoClose={3000} />
        <RoutesApp />

      </div>
      <Footer />
    </>
  );
}

export default App;

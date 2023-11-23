import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Header from './layoult/Header';
import Footer from './layoult/Footer';
import FilmePage from './pages/FilmePage';
import Error from './pages/Error';



function RoutesApp() {
    return(
        <div>

            <ToastContainer autoClose={3000} />
            

            <Router>

                <Header />

                <Routes>

                    <Route path="/Movies-Database" element={ <Home /> } />

                    <Route path="/movie/:id" element={ <FilmePage /> } />

                   <Route path="*" element={ <Error /> } /> 

                </Routes>

            </Router>

           
        </div>
    )
}

export default RoutesApp
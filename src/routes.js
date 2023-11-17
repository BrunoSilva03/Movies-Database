import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Header from './layoult/Header';


function RoutesApp() {
    return(
        <div>

            <ToastContainer autoClose={3000} />
            

            <Router>

                <Header />

                <Routes>

                    <Route path="/Movies-Database" element={ <Home /> } />

                   {/*  <Route path="*" element={ <Error /> } /> */}

                </Routes>

            </Router>

        </div>
    )
}

export default RoutesApp
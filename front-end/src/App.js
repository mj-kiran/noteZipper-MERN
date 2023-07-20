import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './pages/Landingpage/LandingPage';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import MyNotes from './pages/MyNotes/MyNotes';


function App() {
  return (
    <Router>
        <Header />
        <main >
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/mynotes' Component={MyNotes} />
        </Routes>
        </main>
        <Footer/>
      
    </Router>
  );
}

export default App;

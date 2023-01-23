import Navbar from './components/navbar/Navbar';
// import Home from './components/homePage/Home';
import Footer from './components/footer/Footer';
import './App.css';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

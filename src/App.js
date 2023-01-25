import Navbar from './components/navbar/Navbar';
import AllRoutes from './AllRoutes';
import Footer from './components/footer/Footer';
import './App.css';
import Chatbot from './components/ChatBot/Chatbot';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        <Chatbot />
        <AllRoutes />
        <Footer />
      </header>
    </div>
  );
}

export default App;

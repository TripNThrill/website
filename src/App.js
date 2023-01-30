import Navbar from './components/navbar/Navbar';
import AllRoutes from './AllRoutes';
import Footer from './components/footer/Footer';
import Chatbot from './components/ChatBot/Chatbot';
import './App.css';

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

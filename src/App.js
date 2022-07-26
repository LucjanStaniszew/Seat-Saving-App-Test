import NavBar from './Components/NavBar/NavBar.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

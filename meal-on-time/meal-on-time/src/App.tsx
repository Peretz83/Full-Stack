import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import HomePage from './pages/home/HomePage';

function App() {
    return (
        <>
            <Header />
            <HomePage />
        </>
    );
}

export default App;

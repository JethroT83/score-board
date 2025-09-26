
import court from './assets/basketball_court.webp';
import './App.css'
import Tracker from './Tracker';

function App() {

    return (
        <div
            className="relative w-screen h-screen bg-cover bg-center overflow-x-hidden flex items-center justify-center"
            style={{ backgroundImage: `url(${court})` }}
        >
            <Tracker />
        </div>
    );
}

export default App

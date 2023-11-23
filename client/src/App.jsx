import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

function App() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}

export default App;
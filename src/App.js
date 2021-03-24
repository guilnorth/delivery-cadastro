import logo from './logo.svg';
import 'antd/dist/antd.css';
import AppLayout from './components/AppLayout';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <AppLayout />
      </GlobalProvider>
    </div>
  );
}

export default App;

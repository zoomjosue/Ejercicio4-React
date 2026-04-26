import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Players from './pages/Players';
import PlayerDetail from './pages/PlayerDetail';
import NotFound from './pages/NotFound';

// Wrapper para aplicar el tema
function ThemedApp() {
  const { state } = useApp();

  return (
    <div data-theme={state.theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugadores" element={<Players />} />
        <Route path="/jugadores/:id" element={<PlayerDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemedApp />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

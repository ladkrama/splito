import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppPreferencesProvider } from './contexts/AppPreferencesContext';
import Home from './pages/Home';

export default function App() {
  return (
    <AuthProvider>
      <AppPreferencesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<div className="p-8 text-center">Page de connexion</div>} />
            <Route path="/register" element={<div className="p-8 text-center">Page d'inscription</div>} />
            <Route path="/dashboard" element={<div className="p-8 text-center">Tableau de bord</div>} />
            <Route path="/privacy" element={<div className="p-8 text-center">Politique de confidentialité</div>} />
            <Route path="/legal" element={<div className="p-8 text-center">Mentions légales</div>} />
          </Routes>
        </Router>
      </AppPreferencesProvider>
    </AuthProvider>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-logo font-bold text-2xl text-primary-600">
            Splito
          </Link>
          <nav className="flex gap-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Se connecter
            </Link>
            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
              S'inscrire
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

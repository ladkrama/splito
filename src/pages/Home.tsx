import { ArrowRight, Sparkles, Users, TrendingUp, Shield, Calculator, Zap, Calendar, Vote, CheckCircle, Clock } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';
import MobilePreview from '../components/home/MobilePreview';
import InstallPrompt from '../components/pwa/InstallPrompt';

const features = [
  {
    icon: Calculator,
    title: "Calcul automatique",
    description: "Splito calcule automatiquement qui doit combien à qui",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Groupes illimités",
    description: "Créez autant de groupes que vous voulez, sans limite",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Statistiques en temps réel",
    description: "Suivez vos dépenses avec des graphiques détaillés",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Shield,
    title: "100% sécurisé",
    description: "Vos données sont protégées et chiffrées",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Ultra rapide",
    description: "Ajoutez une dépense en moins de 10 secondes",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Sparkles,
    title: "Simple et intuitif",
    description: "Interface moderne et facile à utiliser",
    gradient: "from-violet-500 to-purple-500"
  }
];

export default function Home() {
  const { user, loading } = useAuth();
  const { preferences } = useAppPreferences();
  const isBlueStyle = preferences.headerStyle === 'blue';

  // Redirect to dashboard if user is logged in
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-white md:pt-[88px]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-32 lg:px-8 lg:pt-24 lg:pb-40">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-orange-50 -z-10" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8 animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Gratuit et sans publicité</span>
                </div>

                {/* Title */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    <span className="block text-gray-900">Partagez vos</span>
                    <span className="block text-primary-600">dépenses</span>
                    <span className="block text-gray-900">simplement</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Entre amis, en famille ou en colocation, <span className="font-logo font-bold text-gray-900">Splito</span> rend le partage des dépenses facile et transparent.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/register" className="group">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Commencer gratuitement</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link to="/login">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-2 hover:bg-gray-50 transition-all duration-300"
                    >
                      Se connecter
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">5k+</div>
                    <div className="text-sm text-gray-600 mt-1">Utilisateurs</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">50k+</div>
                    <div className="text-sm text-gray-600 mt-1">Dépenses</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.8/5</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Content - App Preview */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  <MobilePreview isBlueStyle={isBlueStyle} />

                  {/* Floating cards */}
                  <div className="hidden lg:block absolute -left-8 top-20 bg-white rounded-2xl shadow-xl p-4 w-48 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Total économisé</div>
                        <div className="text-lg font-bold text-gray-900">1,247€</div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute -right-8 bottom-32 bg-white rounded-2xl shadow-xl p-4 w-48 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Groupes actifs</div>
                        <div className="text-lg font-bold text-gray-900">8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tout ce dont vous avez besoin
              </h2>
              <p className="text-lg text-gray-600">
                Des fonctionnalités pensées pour simplifier votre quotidien
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Event Scheduling Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>Nouveauté</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  Organisez vos événements en un clin d'œil
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Plus besoin de jongler entre plusieurs applications. Créez un événement, proposez des dates et laissez vos invités voter pour leur disponibilité.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Proposez plusieurs dates</h3>
                      <p className="text-gray-600 text-sm">Créez un sondage avec toutes les dates possibles pour votre événement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Vote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Votez simplement</h3>
                      <p className="text-gray-600 text-sm">Chaque participant indique ses disponibilités en un clic</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Confirmez automatiquement</h3>
                      <p className="text-gray-600 text-sm">La date qui convient au plus grand nombre est mise en évidence</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/register" className="group inline-flex">
                    <Button
                      size="lg"
                      className="shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span>Essayer maintenant</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Visual */}
              <div className="relative order-1 lg:order-2">
                <div className="relative bg-gradient-to-br from-primary-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl" />

                  {/* Mock calendar interface */}
                  <div className="relative bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Soirée jeux</h4>
                          <p className="text-xs text-gray-500">8 participants</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-green-50 border-2 border-green-200 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-900">Sam 20 Dec</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-white" />
                          </div>
                          <span className="text-xs font-semibold text-green-600">7/8</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Dim 21 Dec</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white" />
                          </div>
                          <span className="text-xs text-gray-500">4/8</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Lun 22 Dec</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white" />
                          </div>
                          <span className="text-xs text-gray-500">2/8</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
                        <CheckCircle className="w-4 h-4" />
                        <span>Samedi 20 Dec recommandé</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Vote className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Votes reçus</div>
                        <div className="text-sm font-bold text-gray-900">8/8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-600 -z-10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 -z-10" />

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à simplifier vos dépenses ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui font confiance à Splito pour gérer leurs dépenses partagées
            </p>
            <Link to="/register" className="inline-block group">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Créer mon compte gratuitement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2025 <span className="font-logo font-bold">Splito</span>. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/legal"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <InstallPrompt />
    </div>
  );
}
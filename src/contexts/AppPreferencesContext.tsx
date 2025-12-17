import { createContext, useContext, ReactNode } from 'react';

interface AppPreferencesContextType {
  preferences: {
    headerStyle: 'blue' | 'default';
  };
}

const AppPreferencesContext = createContext<AppPreferencesContextType>({
  preferences: { headerStyle: 'default' }
});

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  return (
    <AppPreferencesContext.Provider value={{ preferences: { headerStyle: 'default' } }}>
      {children}
    </AppPreferencesContext.Provider>
  );
}

export function useAppPreferences() {
  return useContext(AppPreferencesContext);
}

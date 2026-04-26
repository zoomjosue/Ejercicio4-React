import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  theme: 'dark',
  favorites: [],
  filterPosition: 'Todos',
  searchQuery: '',
};

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    }
    case 'SET_FILTER':
      return { ...state, filterPosition: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const toggleFavorite = (id) => dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  const setFilter = (position) => dispatch({ type: 'SET_FILTER', payload: position });
  const setSearch = (query) => dispatch({ type: 'SET_SEARCH', payload: query });

  return (
    <AppContext.Provider value={{ state, toggleTheme, toggleFavorite, setFilter, setSearch }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp debe usarse dentro de AppProvider');
  return context;
}

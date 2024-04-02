import { createContext, useContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();
const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggleTheme':
        return !state
    default:
      return state;
  }
};
export const ThemeProvider = ({ children }) => {
  const [isDark, dispatch] = useReducer(ThemeReducer, null,()=>{
    const LS_theme = localStorage.getItem('darkMode');
    return LS_theme ? LS_theme === "true" : false
  });
  useEffect(() => {
    localStorage.setItem("darkMode", isDark.toString());
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark ,dispatch}}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

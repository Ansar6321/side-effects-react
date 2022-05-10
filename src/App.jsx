import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/auth/Auth"
import Main from "./pages/main/Main"
import NoMatch from "./pages/no-match/NoMatch"
import AuthService from "./services/AuthService"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    /** @type {AuthService} */
    const authService = AuthService.getInstance();

    const subscription = authService.customEvent.subscribe(isLogdIn => setIsLoggedIn(isLogdIn))

    return () => {
      authService.customEvent.unsubscribe(subscription);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={isLoggedIn ? 'main' : 'auth'} />} />
        <Route path='auth/*' element={isLoggedIn ? <Navigate to='/main' /> : <Auth />} />
        <Route path='main/*' element={!isLoggedIn ? <Navigate to='/auth' /> : <Main />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App






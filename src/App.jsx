import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // console.log(import.meta.env.VITE_APPWRITE_URL);
  return !loading ? (
    <div className="relative min-h-screen w-full">
      <div className="pb-[430px]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  ) : null;
}

export default App;

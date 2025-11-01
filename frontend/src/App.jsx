import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {
    const {authUser, loading} = useAuthContext()

    if (loading) return null
    return (
        <div className='flex'>
            <Sidebar />
            <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
                    <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
                    <Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to="/" />} />
                    <Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to="/" />} />
                </Routes>
                <Footer />
                <Toaster />
            </div>

        </div>
    );
}

export default App

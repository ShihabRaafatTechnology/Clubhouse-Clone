import './App.css';
import Welcome from "./pages/Welcome";
import PlanLayout from './pages/PlanLayout/PlanLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';


function App() {
  return (
      <BrowserRouter>
        <PlanLayout>
            <Routes>
               <Route path="/" element={<Welcome/>}/>
               <Route path="/invite" element={<PhoneConfirmation/>}/>
               <Route path="/code_confirm" element={<CodeConfirm/>}/>
               <Route path="/allow_notification" element={<AllowNotification/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/explore" element={<Explore/>}/>
               <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </PlanLayout>
      </BrowserRouter>
  );
}

export default App;

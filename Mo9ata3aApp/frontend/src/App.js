import Home from "./Screens/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Screens/Login/Login";
import LoginAdmin from "./Screens/auth/LoginAdmn/LoginAdmin";
import LoginClient from "./Screens/auth/ClientLogin/LoginClient/LoginClient";
import SignupClient from "./Screens/auth/ClientLogin/SignupClient/SignupClient";
import ClientHomePage from "./Screens/ClientHomePage/ClientHomePage";
import AreaHomePage from "./Screens/AdminArea/AreaHomePage";
import "bootstrap/dist/css/bootstrap.min.css"
import AddReclamation from "./Screens/Reclamation/AddReclamation";
import AllReclamations from "./Screens/Reclamation/AllReclamations";
import Clients from "./Screens/DashBoard/DashBoard";
import Demande from "./Screens/ListeDemande/Demande";
import Document from "./Screens/Documents/Documents";
import WaitList from "./Components/WaitList/WaitList";
import Reclamations from "./Screens/reclamations/reclamations";
import Profile from "./Profile/Profile";
import UserProfile from "./Screens/UserProfile/UserProfile";
import Services from "./Screens/Services/Services";
import ChoiceDemandesPages from "./Screens/Demande/ChoiceDemandesPages";
import EgaliserDocument from "./Screens/EgaliserDocument/EgaliserDocument";
import ObtenirEgalise from "./Screens/ObtenirEgalise/ObtenirEgalise";
import AdminDocuments from "./Screens/AdminDocuments/AdminDocuments";
import DemandeDocument from "./Screens/DemandeDocument/DemandeDocument";
import ObtenirDocument from "./Screens/DemandeDocument/ObtenirDocument";
import { useState } from "react";
import TrackDemand from "./Screens/auth/TrackDemand/TrackDemand";


const  App = () =>  {

  const [ admin , setAdmin] = useState(JSON.parse(localStorage.getItem("admine")));
  const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user); 
  console.log(admin);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LoginClient" element={<LoginClient/>} />
          <Route path="/SignUpClient" element={<SignupClient/>} />
          <Route path="/LoginAdmin" element={<LoginAdmin/>} />
          <Route path="/HomePage" element={<ClientHomePage/>} />
          <Route path="/AreaHomePage"  element={<AreaHomePage />}/>
          <Route path="/auth/addReclamation" element={<AddReclamation />} />
          <Route path="/AllReclamations" element={<AllReclamations />} />
          <Route path="/admin/Clients" element={<Clients />} />
          <Route path="/admin/Demande" element={<Demande />} />
          <Route path="/admin/Documents" element={<Document />} />
          <Route path="/WaitList" element={<WaitList />} />
          <Route path='/reclamations' element={<Reclamations />}/>
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/userdemandes" element={<ChoiceDemandesPages />} />
          <Route path="/egaliserDocument" element={<EgaliserDocument />} />
          <Route path="/ObtenirEgalise" element={<ObtenirEgalise />} />
          <Route path="/admin/Document" element={<AdminDocuments />} />
          <Route path="/demandeDocument" element={<DemandeDocument />} />
          <Route path="/ObtenirDocument" element={<ObtenirDocument />} />
          <Route path="/TrackDemand" element={<TrackDemand />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './componentsToolkit/Dialogs/Dialogs';
import HeaderContainer from './componentsToolkit/Header/HeaderContainer';
import LoginFinal from './componentsToolkit/LoginFinal/LoginFinal';
import ProfileContainer from './componentsToolkit/Profile/ProfileContainer';

const AppToolkit = () => {
  return (
    <div>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/Dialogs" element={<Dialogs />} />
            <Route path="/LoginFinal" element={<LoginFinal />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AppToolkit;
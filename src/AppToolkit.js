import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './componentsToolkit/Dialogs/Dialogs';

const AppToolkit = () => {
  return (
    <div>
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Dialogs" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AppToolkit;
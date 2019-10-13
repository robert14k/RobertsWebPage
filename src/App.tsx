import React from 'react';
import "./App.css";
import 'antd/dist/antd.css';
import { HomeLayout } from './Components/HomeLayout';


const App: React.FC = () => {
  return (
    <div className="App">
      <HomeLayout/>
    </div>
  );
}

export default App;

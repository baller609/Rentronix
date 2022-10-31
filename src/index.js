import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DrawerAppBar from './Components/Menu/Menu';
import App from './App';
import Products from './Components/Product/Products';
import Details from './Components/Product/Details';
import Cart from './Components/Cart/Cart';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    root.render(
      <BrowserRouter>
      <DrawerAppBar/>
      <Routes>
      <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="/" element={<Products />} />
        <Route path="/details" element={<Details />} />

        <Route
      path="*"
      element={<Products/>}
    />
        
          
      </Routes>
    </BrowserRouter>
    );
  } else {
    root.render(
      <BrowserRouter>
      <DrawerAppBar/>
      <Routes>
     
        
      <Route path="login" element={<App/>} />
      <Route
      path="*"
      element={<App/>}
    />
          
      </Routes>
    </BrowserRouter>
    );
  }
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

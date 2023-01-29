import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { firebaseContext } from './context/firebase'
const config = {
 
  apiKey: "AIzaSyDqxNPIZOi8AHnnAg5DP02NerBTkdYAgd4",
  authDomain: "netflix-clone-dc88f.firebaseapp.com",
  projectId: "netflix-clone-dc88f",
  storageBucket: "netflix-clone-dc88f.appspot.com",
  messagingSenderId: "401899376664",
  appId: "1:401899376664:web:138919818531370ae3f36d",
  measurementId: "G-6JVL7P0XQY"
}
const firebase = window.firebase.initializeApp(config);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <firebaseContext.Provider value={config}>
      <App />

    </firebaseContext.Provider>


    </BrowserRouter>
  </React.StrictMode>,
)

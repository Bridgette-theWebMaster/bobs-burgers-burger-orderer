import "./App.css";
import React, { useEffect, useState } from "react";
import Menu from "./Screens/Menu/Menu";
import Login from "./Screens/Users/Login/Login";
import Register from "./Screens/Users/Register/Register";
import { Redirect, Route, Switch } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confirmation from "./Screens/Confirmation/Confirmation";


toast.configure()

function App () {
 
  const [isAuthenticated, setIsAuthenticate] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticate(boolean)
  }
  const checkAuth = async () => {

    try {

      const response = await fetch("https://afternoon-wave-89398.herokuapp.com/auth/verify", {
        method: "GET",
        headers: { token: localStorage.jwtToken }
      })

      const parseRes = await response.json()
      //console.log(parseRes)
      parseRes === true 
        ? setIsAuthenticate(true) 
        : setIsAuthenticate(false)
    } catch(err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    checkAuth()
  }, [])
    //console.log(isAuthenticated)
    return (
      <div className="App">
        <header className="App-header">
        <img
        src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
        alt="logo"
        className="logo"
      />
        </header>
        <main className='App-main'>
          
          <Switch>
            {["/", "/login"].map((path, i) => (
              <Route 
                exact 
                path={path} 
                render={props => 
                  !isAuthenticated ? 
                    <Login {...props}  setAuth={setAuth}/> :
                    <Redirect to="/menu" />} key={i} />
            ))}
            <Route 
              path="/register" 
              render={props => 
                !isAuthenticated ?
                  <Register {...props} setAuth={setAuth}/> :
                  <Redirect to='/login' />} />

            <Route
              path="/menu"
              render={(props) => 
                isAuthenticated ? (
                  <Menu
                  {...props}
                    setAuth={setAuth}
                  />) :
                  <Redirect to='/login' />
              }
            />
            <Route
              path='/confirmation'
              render={(props) => 
                isAuthenticated ? (
                  <Confirmation
                  {...props}
                    setAuth={setAuth}
                  />) :
                  <Redirect to='/login' />
                } />
          </Switch>
        </main>
      </div>
    );
  }


export default App;

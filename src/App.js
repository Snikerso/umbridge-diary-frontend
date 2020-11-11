import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import authContext from 'contexts/authContext';
import reducerAuth from 'reducers/reducerAuth';
import magContext from 'contexts/magContext';
import reducerMag from 'reducers/reducerMag';
import dormitoryContext from 'contexts/dormitoryContext';
import reducerDormitory from 'reducers/reducerDormitory';

import Login from 'components/molecules/Login';
import UserProgress from './components/templates/UserProgress';
import UserInfo from './components/templates/UserInfo';
import Dormitory from './components/templates/Dormitory';
import Home from './components/templates/Home';

import MainTemplate from 'templates/MainTemplate';
import Header from 'components/molecules/Header';



function App() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)
  const [stateAuth, dispatchAuth] = useReducer(reducerAuth, {
    username: null,
    token: localStorage.getItem('token')
  })


  const [stateMag, dispatchMag] = useReducer(reducerMag, [])
  const [dormitorys, dispatchDormitorys] = useReducer(reducerDormitory, []);


  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`${process.env.REACT_APP_API_URL}/api/dormitorys/`, {

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      }
    }).then(res => {
      let data = res.data
      dispatchDormitorys({ type: 'INIT', data })
    })

  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(`${process.env.REACT_APP_API_URL}/api/userprogress/`, {

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      }
    }).then(res => {

      let data = res.data
      console.log(data)
      dispatchMag({ type: 'INIT', data })

    })

  }, [])


  return (

    <BrowserRouter>
      <authContext.Provider value={{ stateAuth, dispatchAuth }} >
        <magContext.Provider value={{ stateMag, dispatchMag }}>
          <dormitoryContext.Provider value={{ dormitorys, dispatchDormitorys }}>
            <MainTemplate>
              <Header
                modalLoginIsOpen={modalLoginIsOpen}
                setModalLoginIsOpen={setModalLoginIsOpen} />

              {stateAuth.token ? (
                <Switch>
                  <Route exact path='/userinfo' component={UserInfo} />
                  <Route exact path='/dormitory' component={Dormitory} />
                  <Route exact path='/mags' component={UserProgress} />
                  <Route exact path='/' component={Home} />
                </Switch>
              ) : (
                  <>
                    <Route exact path='/' component={Home} />
                    <Login
                      modalLoginIsOpen={modalLoginIsOpen}
                      setModalLoginIsOpen={setModalLoginIsOpen} />
                  </>
                )
              }
            </MainTemplate>
          </dormitoryContext.Provider>
        </magContext.Provider>
      </authContext.Provider>
    </BrowserRouter>

  );
}

export default App;

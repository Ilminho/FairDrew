import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'

//import { initializeBlogs } from './reducers/blogReducer'
import {connect} from "react-redux"
import { initializePersons, setPersons } from './reducers/personReducer';

import Header from './components/Header';
import Generator from './components/Generator';
import Menu from './components/Menu';
import Footer from './components/Footer';
import GeneratorCardConnection from './components/GeneratorCard';
import getDrewWithHash from "./routers/drawRouter"
import { initializeDBPersons } from './reducers/dbPersonReducer';

import { useEffect } from 'react';


const Persons = [{name:"Example",id:0}]

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(initializeDBPersons())
    dispatch(setPersons(Persons))
  },[])

  return (
    <div className='App'>

      
      <Header/>
      <GeneratorCardConnection/>

    </div>
  );
}

const mapStateProps = (state)=>{
  return{
    generator:state.generator
  }
}

const dispatchProps = {
  setPersons
}

const ConnectApp = connect(mapStateProps, dispatchProps)(App)

export default ConnectApp

/*
      <Menu className="Menu"/>
      <Generator />
      <Footer/>
*/



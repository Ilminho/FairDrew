import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'

//import { initializeBlogs } from './reducers/blogReducer'
import {connect} from "react-redux"
import { setPersons } from './reducers/personReducer';

import Header from './components/Header';
import Generator from './components/Generator';
import Menu from './components/Menu';
import Footer from './components/Footer';
import GeneratorCardConnection from './components/GeneratorCard';

import { useEffect } from 'react';


const Persons = [{name:"Example", percentage:0, id:0}]

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
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



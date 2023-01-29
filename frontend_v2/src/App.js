
import CustomInput from './components/customInput';
import ConnectDraws from './components/Draws';
import "./App.css"
import { useDispatch } from 'react-redux'
import {connect} from "react-redux"
import { numberSetter } from './reducers/cardReducer';

function App() {
  return(
    <div className='App'>
      <div >
        <ConnectDraws/>
      </div>
    </div>
  )
}

const mapStateProps = (state)=>{
  return{
    card:state.card
  }
}

const dispatchProps = {
  numberSetter
}

const ConnectApp = connect(mapStateProps, dispatchProps)(App)

export default ConnectApp

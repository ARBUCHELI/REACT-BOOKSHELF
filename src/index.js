import React from 'react' //Obligatory to use react
import ReactDOM from 'react-dom' //This is obligatory because react is uploaded from <script>
import App from './App' //Used for importing the class written in the file App.js under the same directory
import './index.css' //style
import { BrowserRouter } from 'react-router-dom'//Obligatory to use react router

ReactDOM.render( //All the app is going to be renderizer
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root')
)

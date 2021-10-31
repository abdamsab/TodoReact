import React from "react"
import ReactDOM from "react-dom"

import TodoContainer from "./functionBased/components/TodoContainer"

import "./functionBased/App.css"

import { BrowserRouter as Router } from "react-router-dom"

//const element = <h1>Hello from React</h1>
ReactDOM.render(
	<React.StrictMode>
		<Router> 
			< TodoContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
	)
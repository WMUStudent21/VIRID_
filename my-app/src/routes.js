import {BrowserRouter, Route, Link, Router} from "react-router-dom"
import App from "./App"
import AddPoi from "./components/add_poi"

function addRoutes() {
    <Router>
    <Route exact path="/" component={App}/> 
    <Route path='/add_poi' component={AddPoi}/>
    </Router>
}


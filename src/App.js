import React from 'react';
import Home from "./components/Home";
import Serie from "./components/Serie";
import Personagens from "./components/Characters"
import Grishaverso from './components/Grishaverse';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./components/assets/logo.png"
import {Caixa, Box, GlobalStyle} from "./components/styles"

const App = () =>{
    return(
        <Box>
            <GlobalStyle/>         
            <Router>
                <Caixa>
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li><Link to="/Home">Início</Link></li>
                        <li><Link to="/Serie">A Série</Link></li>
                        <li><Link to="/Characters">Personagens</Link></li>
                        <li><Link to="/Grishaverse">Grishaverso</Link></li>
                    </ul>
                </Caixa>
                <Routes>      
                    <Route element = {<Home/>} path="/Home" />
                    <Route element = {<Serie/>} path="/Serie" />
                    <Route element = {<Personagens/>} path="/Characters" />
                    <Route element = {<Grishaverso/>} path="/Grishaverse" />
                </Routes> 
            </Router>
        </Box>
    )
}
export default App;
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProfileScreen from './screen/ProfileScreen';
import {Routes, Route, Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import React from "react";

function App() {
    return (
        <div>
            <Header/>
            <Container className='mt-50 mb-50 justify-content-center'>

                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/register" element={<RegisterScreen/>}/>
                    <Route path="/profile" element={<ProfileScreen/>}/>

                </Routes>
                <Footer/>
            </Container>

        </div>
    );
}

export default App;

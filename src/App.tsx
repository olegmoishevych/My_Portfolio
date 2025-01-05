import React from 'react';
import './App.scss';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {Skills} from './skills/Skills';
import {Footer} from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;

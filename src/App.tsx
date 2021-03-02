import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

function Rating() {
    return (
        <div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
            <div>star</div>
        </div>
    );
}

function Accordion() {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>Пункт 1</li>
                <li>Пункт 2</li>
                <li>Пункт 3</li>
            </ul>
        </div>
    );
}

export default App;

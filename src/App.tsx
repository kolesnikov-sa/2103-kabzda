import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component."}/>
            <PageTitle title={"My friends."}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Меню"} collapsed={true}/>
            <Accordion title={"Список пользователей"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle (props: any) {
    return <h2>{props.title}</h2>
}

export default App;

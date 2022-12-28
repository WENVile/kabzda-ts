import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <>
            <PageTitle title={'This is react-app'}/>
            <PageTitle title={'My Friends'}/>
            <Rating value={1}/>
            <Accordion title={'One'}/>
            <Accordion title={'Two'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;




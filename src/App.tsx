import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
    return (
        <>

            <Accordion title={'One'} />
            <Accordion title={'Two'} />


            <Rating />
            <Rating />
        </>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;




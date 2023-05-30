import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
    return (
        <>

            <Accordion title={'One'} collapsed={false} />
            <Accordion title={'Two'} collapsed={false} />
            <Rating value={0} />
            <Rating value={2} />
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




import React, { useState } from "react";

type AccordionPropsType = {
    title: string;
}

type AccordionTitlePropsType = {
    title: string;
    onTitleClick: () => void
}



function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onTitleClick()}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}


function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            {/* <button onClick={() => setCollapsed(!collapsed)}>Жмякни</button> */}
            <AccordionTitle onTitleClick={() => setCollapsed(!collapsed)} title={props.title} />
            {!collapsed && <AccordionBody />}
        </div>
    )

}




export default Accordion;
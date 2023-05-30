import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

type AccordionTitlePropsType = {
    title: string;
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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

    return (
        <div>
            <AccordionTitle title={props.title} />
            {!props.collapsed && <AccordionBody />}
        </div>
    )

}




export default Accordion;
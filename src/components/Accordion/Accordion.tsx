import React from "react";

export function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    return (
        <h3>Меню</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
        </ul>
    );
}

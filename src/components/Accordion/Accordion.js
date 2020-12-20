import { useState, useEffect } from 'react';
//STYLES
import '../../styles/css/Accordion.css';

function AccordionList(props) {
    //Use state to show/hide the accordion text
    const [active, setActive] = useState("hide");

    return (
        <>
            <div className="accordion">
                <div className="accordionIcon">
                    <img width="70" src={props.icon} />
                </div>
                <div className="accordionContent">
                    <p className="accordionTitle">
                        {props.title}
                    </p>
                    <p className="accordionSubtitle">
                        {props.subTitle}
                    </p>
                </div>
                <div className="moreButton">
                    <button onClick={()=>setActive(active == "hide" ? "show" : "hide")}>{props.buttonText}</button>
                </div>
            </div>
            <div className={"divide " + active}></div>
            <div className={"accordionExpanded " + active}>
                <p>{props.content}</p>
            </div>
        </>
    );
}

export default AccordionList;
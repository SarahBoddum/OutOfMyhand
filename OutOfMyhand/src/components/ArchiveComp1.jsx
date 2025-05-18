import React from "react";
import { Link } from 'react-router-dom'; 

const ArchiveComp1 = (props) => {
    const {imgVertikal, imgHorisontal, årstal, imgHorisontalClass2, top1nr2, linkTo = "#"} = props; 
    return (
        <Link to={linkTo}>
        <div className={`archive1 ${top1nr2}`}>
            <img className="imgVertikal" src={imgVertikal}/>
            <div className="AC1-txtImg">
                <img className={`imgHorisontal ${imgHorisontalClass2}`} src={imgHorisontal}/>
                {årstal}
            </div>
        </div>
        </Link>
    );
};

export default ArchiveComp1;
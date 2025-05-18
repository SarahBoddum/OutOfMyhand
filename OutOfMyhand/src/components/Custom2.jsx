import { useEffect, useState } from "react";
import { db } from "../Data/firebase";
import { doc, getDoc } from "firebase/firestore";

const Custom2 = (props) => {
    const {marginL2, content, custom2img, C2imgAlt} = props; 

    return (
        <div className={`marginL1 ${marginL2}`}>
            <div id="Custom2txt">
                {content}
            </div>
            <img src={custom2img} alt={C2imgAlt}></img>
        </div>
    );
};

export default Custom2; 
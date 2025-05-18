import React from "react";

const Custom1 = (props) => {
const {imgVenstre, contentright, topReverse} = props; 

    return (
        <div className={`top1 ${topReverse}`}>
            <div  className="haltreds50">
                
                {imgVenstre}
            </div>
            
                {contentright}
       

        </div>
    );
};

export default Custom1;
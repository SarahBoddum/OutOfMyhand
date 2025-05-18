import React from "react";

const Top1 = (props) => {
    const {content, topimg} = props; 

    return (
        <div className="top1">
            {content}
            <div className="haltreds50">
                <img src={topimg}/>
            </div>
        </div>
    );
};

export default Top1;
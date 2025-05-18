import React from "react";
import Top1 from "../components/Top1";
import soga from "../assets/oomhxaljSLUT.jpg";
import { Link } from 'react-router-dom'; 
import Custom1 from "../components/Custom1";
import Custom2 from "../components/Custom2";
import ALJogOOMH from "../assets/OOMHXALJ2.mov"
import sarahALJ from "../assets/a2.jpg";
import SaWedding from "../assets/SAWedding.jpg"

const Custom = () => {
    return (
        <div>
            <Top1
            content={<div className="haltreds50">
                <h1 id="custom">Customized</h1>
                <p>I love working with real clients - no matter if your style fits mine or not! It’s always inspiring to collaborate through the process and help shape YOUR dream.
                    So if you have a specific piece in mind, please don’t hold back, but contact me and we’ll figur out someting beautiful. </p>
                <Link className="pinklink">Contact me</Link>
                <div id="customLink">
                    <Link to="/Custom#wedding" className="CLink">Wedding</Link>
                    <Link to="/Custom#performance" className="CLink">Performance</Link>
                    <Link className="CLink">The Suit</Link>
                </div>
            </div>}
            topimg={soga}></Top1>

            <h1 className="OverskriftCostum" id="wedding">Wedding</h1>

            <Custom1
            imgVenstre={<video src={ALJogOOMH} className="my-video" muted autoPlay loop></video>}
            contentright={<div className="haltreds50 leftAlign"><h3>Anna Linn Jewellry x OOMH</h3>
            <img src={sarahALJ}></img>
            <p>This mini-collection I made i collaboration with Anna Linn to promote her jewellries for wedding and confirmation. </p></div>}>
            </Custom1>

            <Custom2
            content={<div><h3>S.A.'s Wedding dress</h3><p>This dress I made for S.A. who is an architect and wanted the dress to be simple and drapy. 
            It is a two piece dress that consists of the dress itself and the detachable seemless weil.</p></div>}
            custom2img={SaWedding}></Custom2>


            <h1 className="OverskriftCostum"  id="performance">Performance</h1>
        </div>
    );
};

export default Custom;
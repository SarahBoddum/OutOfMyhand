import React from "react";
import ArchiveComp1 from "../components/ArchiveComp1";
import Top1 from "../components/Top1";
import Anna from "../assets/AK-1-2.jpg";
import vendbar1 from "../assets/Vend2.1.jpg";
import alex from "../assets/ADenim2.jpg";
import biker from "../assets/biker1.jpg";
import Petra1 from "../assets/Forside-karrusel3.jpg";
import Petra2 from "../assets/Lkora2.jpg";
import petra from "../assets/Marche2.jpg";

const Archive = () => {
    return (
        <div>
            <Top1
            content={<div className="haltreds50"><h1>Archive</h1>
            <p>I don’t really work with typical collections. Most of my styles appear and reappear over the years. Sometimes they evolve into new models, sometimes I find something in my archive that feels new again and recreate it in other materials.</p></div>}
            topimg={petra}>
            </Top1>

            <ArchiveComp1
            imgVertikal={Anna}
            imgHorisontal={vendbar1}
            årstal={<h3 className="årstal">2025</h3>}
            linkTo="/2025">
            </ArchiveComp1>

            <ArchiveComp1
            top1nr2="columnReverse"
            imgVertikal={alex}
            imgHorisontal={biker}
            årstal={<h3 className="årstal">2024</h3>}
            linkTo="/2024">
            </ArchiveComp1>

            <ArchiveComp1
            imgVertikal={Petra1}
            imgHorisontal={Petra2}
            årstal={<h3 className="årstal">2023<br/>&before</h3>}
            linkTo="/2023">
            </ArchiveComp1>
        </div>
    );
};

export default Archive;
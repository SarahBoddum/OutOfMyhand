import React, { useState, useEffect } from "react";
import { db } from '../Data/firebase';  
import { collection, getDocs } from "firebase/firestore"; 
import { Link } from 'react-router-dom'; 
import { useSwipeable } from "react-swipeable"; 
import pilH from '../assets/pilH.png';
import KC from '../assets/KC-1.jpg';
import aogs from '../assets/oomhxaljSLUT.jpg';

const Frontpage = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgImage, setBgImage] = useState("");  
    const [teasers, setTeasers] = useState([]);
    const [teaserIndex, setTeaserIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Forside"));
                const imageData = querySnapshot.docs.map(doc => ({
                    src: doc.data().billede, 
                    alt: doc.data().alt || "Billede"
                }));

                console.log("Hentede billeder:", imageData);
                setImages(imageData);

                if (imageData.length >= 4) {
                    setBgImage(imageData[3].src); 
                }

                if (imageData.length >= 7) {
                    setTeasers(imageData.slice(4, 7));
                }

            } catch (error) {
                console.error("Fejl ved hentning af billeder:", error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length < 3) return;  

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 3);  
        }, 3000);

        return () => clearInterval(interval);  
    }, [images]);

    // Tjek skærmbredde og opdater state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Swipe-handlers (kun på mobil)
    const handlers = useSwipeable({
        onSwipedLeft: () => setTeaserIndex((prev) => (prev + 1) % teasers.length),
        onSwipedRight: () => setTeaserIndex((prev) => (prev - 1 + teasers.length) % teasers.length),
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
        trackMouse: true
    });

    return (
        <div>
            <div id="forsideTop">
                <div className="flex">   
                    <div className="forside-top">
                        <div className="forside-karrusel">
                            {images.length >= 3 ? (
                                images.slice(0, 3).map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                                    />
                                ))
                            ) : (
                                <p>Indlæser billeder...</p>
                            )}
                        </div>
                    </div>
                    <h1 className="title">Out<br />Of<br />My<br />Hand</h1> 
                </div> 
                <p>Out Of My Hand is fashion in a slower pace. Everything is made by hand and mainly from left over fabric and deadstock. <br /><br />Never normcore - always unicore</p>
                
                <div 
                    className="forside-baggrund" 
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <Link to="/Shop" className="kasseLink">
                        SHOP
                        <img src={pilH}/>
                    </Link>
                </div>
            </div>
            
            {/* Teaser-billeder */}
            {isMobile ? (
                <div className="teaser-container" {...handlers}>
                    {teasers.length > 0 && (
                        <img 
                            src={teasers[teaserIndex].src} 
                            alt={teasers[teaserIndex].alt} 
                            className="teaser-image"
                        />
                    )}

                    {/* Indikatorer */}
                    <div className="teaser-indicators">
                        {teasers.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${index === teaserIndex ? "active" : ""}`}
                                onClick={() => setTeaserIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="teaser-container desktop">
                    {teasers.map((teaser, index) => (
                        <img key={index} src={teaser.src} alt={teaser.alt} className="teaser-image" />
                    ))}
                </div>
            )}

            <div className="toKolonner">
                <div className="halvSkærm">
                    <Link to="/Custom" className="LinkUKasse">
                        CUSTOMIZED
                        <img src={pilH}/>
                    </Link>
                    <img src={KC} id="KCforside"/>
                </div>
                <div className="halvSkærm">
                    <img src={aogs} id="aogs"/>
                </div>
            </div>

        </div>
    );
};

export default Frontpage;

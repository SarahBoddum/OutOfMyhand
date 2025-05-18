import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../Data/firebase";
import { doc, getDoc } from "firebase/firestore";

const ArchiveDetail = () => {
  const { year } = useParams();
  const [archiveData, setArchiveData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!year) return; // Stop, hvis "year" ikke er defineret
  
    const fetchArchive = async () => {
      try {
        const docRef = doc(db, "Arkiv", year);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setArchiveData(docSnap.data());
        } else {
          console.log("Dokument findes ikke");
        }
      } catch (err) {
        console.error("Fejl ved hentning:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchArchive();
  }, [year]);
  

  if (loading) return <p>Indlæser…</p>;
  if (!archiveData) return <p>Intet indhold fundet for {year}</p>;

  return (
    <div>
    <h3 className="årOverskrift">{year}</h3>
    <div className={`archive-grid layout-${archiveData.layout}`}>
        {Array.isArray(archiveData.billede) ? (
            archiveData.billede.map((imgObj, index) => (
            <div key={index} className="archive-image-wrapper">
                <img
                    src={imgObj.url}
                    alt={`Arkivbillede ${index + 1}`}
                    className="archive-image"
                />
                <p className="style-name">{imgObj.styleName}</p>
            </div>
    ))
    ) : (
    <p>Ingen billeder fundet.</p>
    )}

        </div>
    </div>
  );
};

export default ArchiveDetail;

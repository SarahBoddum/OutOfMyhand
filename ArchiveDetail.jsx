import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../Data/firebase";
import { doc, getDoc } from "firebase/firestore";
import ArchiveLayoutThree from "../components/ArchiveLayoutThree";
import ArchiveLayoutTwo from "../components/ArchiveLayoutTwo";

const ArchiveDetail = () => {
  const { year } = useParams();
  const [archiveData, setArchiveData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <>
      {archiveData.layout === "three" ? (
        <ArchiveLayoutThree images={archiveData.billeder} />
      ) : (
        <ArchiveLayoutTwo images={archiveData.billeder} />
      )}
    </>
  );
};

export default ArchiveDetail;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ISura } from "@/entities/Ayahs/model/types/ayahs";
import Ayahs from "@/entities/Ayahs/ui/Ayahs";

const AyahsList = () => {
  const { id } = useParams();
  const [ayahs, setAyahs] = useState<ISura[]>([]);
  const [allSura, setAllSura] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ru.kuliev`
    )
      .then((res) => res.json())
      .then((data) => {
        setAyahs(data.data);
      });
  }, [id]);

  return (
    <div>
      <div className={"styles.sura"} dir="rtl">
        <div
          className={allSura ? "styles.modeAllSura" : "styles.modeLearnSura"}
        >
          {ayahs[0]?.ayahs.map((aya, index) => {
            return <Ayahs index ={index} aya={aya} allSura={allSura} ayahs = {ayahs}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AyahsList;

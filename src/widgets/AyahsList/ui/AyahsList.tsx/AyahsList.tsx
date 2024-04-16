import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ISura } from "@/entities/Ayahs/model/types/ayahs";
import Ayahs from "@/entities/Ayahs/ui/Ayahs";
import Button from "@/shared/ui/Buttton/Button";

const AyahsList = () => {
  const { id } = useParams();
  const [ayahs, setAyahs] = useState<ISura[]>([]);
  const [allSura, _] = useState(false);
  const [currentSurah, setCurrentSurah] = useState(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchSurah(currentSurah);
  }, [currentSurah]);

  const fetchSurah = (surahNumber: number) => {
    fetch(
      `https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,ru.kuliev`
    )
      .then((res) => res.json())
      .then((data) => {
        setAyahs(data.data);
      });
  };

  const goToNextSurah = () => {
    if (!isDisabledNextSura) {
      const nextSurahNumber = currentSurah + 1;
      setCurrentSurah(nextSurahNumber);
      fetchSurah(nextSurahNumber);
    }
  };

  const goToPreviousSurah = () => {
    if (!isDisabledPreviousSura) {
      const previousSurahNumber = currentSurah - 1;
      setCurrentSurah(previousSurahNumber);
      fetchSurah(previousSurahNumber);
    }
  };

  const isDisabledNextSura: boolean = currentSurah === 114;
  const isDisabledPreviousSura: boolean = currentSurah === 1;

  return (
    <div>
      <div className={"styles.sura"} dir="rtl">
        <div
          className={allSura ? "styles.modeAllSura" : "styles.modeLearnSura"}
        >
          {ayahs[0]?.ayahs.map((aya, index) => {
            return (
              <Ayahs
                key={aya.number}
                index={index}
                aya={aya}
                allSura={allSura}
                ayahs={ayahs}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 ">
        <Button
          onClick={goToPreviousSurah}
          className={`mr-4 ${
            isDisabledPreviousSura &&
            "bg-gray-300 text-gray-400 cursor-not-allowed pointer-events-none"
          }`}
        >
          <span className="mr-2">&#10094;</span>
          Предыдущая сура
        </Button>
        <Button
          onClick={goToNextSurah}
          className={`${
            isDisabledNextSura &&
            "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
          }`}
        >
          Следующая сура
          <span className="ml-2">&#10095;</span>
        </Button>
      </div>
    </div>
  );
};

export default AyahsList;

import { FC } from "react";
import { AyahsProps } from "../model/types/ayahs";

const Ayahs: FC<AyahsProps> = ({ aya, allSura, ayahs, index }) => {
  const isBismillah =
    aya.text.includes("بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") || // 95 97
    aya.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"); // остальные

  let displayText = aya.text;

  if (isBismillah) {
    displayText = displayText.replace(
      /بِّسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ|بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ/,
      ""
    );
  }
  return allSura ? (
    <span key={aya.number}>
      {isBismillah && (
        <div className={"styles.bismillah"}>
          <img src="../logo/Basmala.svg" alt="" />
        </div>
      )}
      <span className={"styles.allSura"}>
        {displayText}
        <span className={"styles.numberInSurah"}>﴿{aya.numberInSurah}﴾</span>
      </span>
    </span>
  ) : (
    <div
      key={aya.number}
      // className={
      //   "currentAudioIndex" === aya.number
      //     ? "styles.currentPlaying"
      //     : ""
      // }
    >
      {isBismillah && (
        <div className={"styles.bismillah"}>
          <img src="../logo/Basmala.svg" alt="" />
        </div>
      )}

      <div
        className={"styles.aya"}
        //   onClick={() => {
        //     playAudio(aya.number);
        //   }}
      >
        <div className={"styles.ayat"}>
          <span>{displayText} </span>
          <span dir="ltr">
            {ayahs[0]?.number}:{aya.numberInSurah}
          </span>
        </div>
        <span className={"styles.translate"} dir="ltr">
          {ayahs[1]?.ayahs[index].text}
        </span>
      </div>
    </div>
  );
};

export default Ayahs;

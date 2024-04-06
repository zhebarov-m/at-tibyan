import { FC } from "react";
import { IAyahs, ISura } from "../model/types/ayahs";
import styles from "./Ayahs.module.css";
import { Basmalla } from "./icons/Basmalla";

interface AyahsProps {
  aya: IAyahs;
  ayahs: ISura[];
  allSura: boolean;
  index: number;
}

const Ayahs: FC<AyahsProps> = (props) => {
  const { aya, allSura, ayahs, index } = props;
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
        <div className={styles.bismillah}>
          {Basmalla}
        </div>
      )}
      <span className={styles.allSura}>
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
        <div className={styles.bismillah}>
          {Basmalla}
        </div>
      )}

      <div
        className={styles.aya}
        //   onClick={() => {
        //     playAudio(aya.number);
        //   }}
      >
        <div className={styles.ayat}>
          <span>{displayText} </span>
          <span dir="ltr">
            {ayahs[0]?.number}:{aya.numberInSurah}
          </span>
        </div>
        <span className={styles.translate} dir="ltr">
          {ayahs[1]?.ayahs[index].text}
        </span>
      </div>
    </div>
  );
};

export default Ayahs;

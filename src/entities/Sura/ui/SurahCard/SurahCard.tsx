import {iSura} from "@/entities/Sura/model/types/surah.ts";
import logoSurahCard from "../../../../shared/assets/icons/logo.png"

interface SurahCardProps {
    id: number,
    surah: iSura
}

export const SurahCard = (props: SurahCardProps) => {
    const {
        id,
        surah
    } = props

    return (
        <>
            <div
                style={{fontFamily: 'Montserrat'}}
                className="
                    flex
                    justify-between
                    lg:hover:bg-[#EBF9F9]
                    items-center
                    border-2
                    border-[#f4f5f6]
                    rounded-[10px]
                    shadow-md
                    duration-500
                    m-1.5
                    p-4
                "
            >
                <div
                    className="flex justify-center items-center w-16 h-16 bg-contain bg-no-repeat"
                    style={{backgroundImage: `url(${logoSurahCard})`}}
                >
                    <span
                        className="
                            relative
                            top-[1.13rem]
                            left-[1.26rem]
                            font-bold
                            rounded-[20%]
                            w-[30px]
                            text-center
                            text-xs
                            border-[1px]
                            border-[#2ca4ab]
                            bg-white
                            p-[3px]
                        "
                    >
                        {id}
                    </span>
                </div>
                <div
                    className="text-xs text-center text-[darkgrey]"
                >
                    <div
                        className="text-2xl h-12 flex justify-center items-center text-black"
                        style={{fontFamily: 'me_quran-Regular, monospace'}}
                    >{surah.name_arabic}</div>
                    <div>{surah.name_simple}</div>
                    <div>{surah.name}</div>
                    <div>
                        <div>{surah.translated_name.name}</div>
                    </div>
                </div>
                <div>
                    <div className="text-right">
                        {surah.revelation_place === "makkah" ? (
                            <span>Мекка</span>
                        ) : (
                            <span>Медина</span>
                        )}
                        <div>
                            Аяты: {surah?.verses_count}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};


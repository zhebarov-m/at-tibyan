import {Link} from "react-router-dom";
import {SurahCard, surahes} from "@/entities/Sura";
import {useState} from "react";
import {iSura} from "@/entities/Sura/model/types/surah.ts";

const SurahList = () => {
    const [sortSurahes, setSortSurahes] = useState<iSura[]>([...surahes])

    return (
        <div className="
            grid
            grid-cols-1
            grid-rows-5
            gap-1
            max-w-[1000px]
            container
            mx-auto
            md:grid-cols-2
            lg:grid-cols-3
        ">
            {sortSurahes?.map(surah => {
                return (
                    <Link
                        to={`/${surah.id}`}
                        key={surah.id}
                    >
                        <SurahCard
                            id={surah.id}
                            surah={surah}
                        />
                    </Link>
                )
            })}
        </div>
    );
};

export default SurahList;

import {Link} from "react-router-dom";
import {SurahCard, surahes} from "@/entities/Sura";
import {useState} from "react";
import {iSura} from "@/entities/Sura/model/types/surah.ts";


const SurahList = () => {
    const [sortSurahes, _] = useState<iSura[]>([...surahes])

    return (
        <div className={
            `
            mt-8
            grid
            grid-cols-2
            grid-rows-5
            max-w-full
            container
            mx-auto
            xr:gap-1
            sd:grid-cols-3
            xr:grid-cols-2
            mz:grid-cols-3
            xl:grid-cols-3
            2xl:grid-cols-4
        `
        }>
            {sortSurahes?.map(surah => {
                return (
                    <Link
                        to={`surahes/${surah.id}`}
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

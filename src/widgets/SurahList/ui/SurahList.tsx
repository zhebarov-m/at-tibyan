import {Link} from "react-router-dom";
import {SurahCard, surahes} from "@/entities/Sura";
import {useState} from "react";
import {iSura} from "@/entities/Sura/model/types/surah.ts";
import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {selectCollapse} from "@/widgets/Sidebar";

const SurahList = () => {
    const [sortSurahes, _] = useState<iSura[]>([...surahes])
    const collapsed = useAppSelector(selectCollapse)

    return (
        <div className={
            `
            ${collapsed ? 'xr:max-w-[76rem] gap-0' : ''}
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

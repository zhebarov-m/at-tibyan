import {useParams} from "react-router-dom";

const SurahPage = () => {
    const {id} = useParams()
    console.log(id)

    return (
        <div>
            <h1>SURAH №{id}</h1>
        </div>
    );
};

export default SurahPage;

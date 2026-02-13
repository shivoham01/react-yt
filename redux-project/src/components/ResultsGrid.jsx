import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setResults, setError, setLoading } from "../redux/features/searchSlice"
import { fetchGiphy, fetchPhotos, fetchVideos } from "../api/mediaApi";
import ResultCard from "./ResultCard";

const ResultsGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

    useEffect(() => {
        const getData = async () => {
            // If query is empty
            if (!query) return;

            try {
                dispatch(setLoading(true))
                let data = [];
                // Photos
                if (activeTab == "photos") {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }));
                }
                // Videos
                if (activeTab == "videos") {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: 'video-title',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }));
                }
                // GIF
                if (activeTab == "gif") {
                    let response = await fetchGiphy(query)
                    console.log(response);
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: item.type,
                        title: item.title,
                        thumbnail: item.images.fixed_width_small.url,
                        src: item.images.original.url,
                        url: item.url
                    }));
                }
                dispatch(setResults(data));
                dispatch(setLoading(false));

            } catch (err) {
                dispatch(setError(err.message));
            }
        }
        getData();
    }, [query, activeTab])

    // IF Error
    if (error) return <h1 className="text-center">Error</h1>

    // IF Loading
    if (loading) return <h1 className="text-center">Loading...</h1>

    return (
        <div className="flex gap-6 p-5 items-center justify-center overflow-hidden flex-wrap">
            {results.map((item, idx) => {
                return <div key={idx}>
                        <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultsGrid
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchGiphy, fetchPhotos, fetchVideos } from "../api/mediaApi";

const ResultsGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

    useEffect(() => {
        const getData = async () => {
            let data;
            // Photos
            if (activeTab == "photos") {
                let response = await fetchPhotos(query)
                data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full
                }));
                console.log(data);
            }
            // Videos
            if (activeTab == "videos") {
                let response = await fetchVideos(query)
                data = response.videos.map((item) => ({
                    id: item.id,
                    type: 'video',
                    title: 'video-title',
                    thumbnail: item.image,
                    src: item.video_files[0].link
                }));
                console.log(data);
            }
            // GIF
            if (activeTab == "gif") {
                let response = await fetchGiphy(query)
                data = response.data.map((item) => ({
                    id: item.id,
                    type: item.type,
                    title: item.title,
                    thumbnail: item.images,
                    src: item.url
                }));
                console.log(data);
            }
        }
        getData();
    }, [query, activeTab])

    return (
        <div>

        </div>
    )
}

export default ResultsGrid
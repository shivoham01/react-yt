import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const newsDataContext = createContext();

const NewsContext = (props) => {
    const [news, setNews] = useState([]);
    const getNewsFunction = async () => {
        const getNews = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=38dafe0e75a54842826a462c20d2ee5f");
        setNews(getNews.data.articles);
    }

    useEffect(() => {
        getNewsFunction();
    }, [])
    
    return (
        <newsDataContext.Provider value={[news, setNews]}> 
            {props.children}
        </newsDataContext.Provider>
    )
}

export default NewsContext
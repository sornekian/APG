import { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewItem';
import { getNews } from '../../utilities/news-api';

export default function NewsList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const KEY = process.env.REACT_APP_NEWSAPI_API_KEY;

        async function getArticles() {

            const response = await getNews()
            console.log(response)
            setArticles(response.articles)

        }

        // const getArticles = async () => {
        //     const response = await fetch(
        //         `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${KEY}`);
        //     const data = await response.json();
        //     console.log(data)
        //     setArticles(data.articles);
        // };

        getArticles();
    }, []);

    return (
        <div>
            <h1>Business News Across America</h1>
            {articles && articles.length > 0 ? (
                articles.map((article, idx) => (
                    <NewsItem
                        article={article}
                        key={idx}
                    />
                ))
            )
                : (
                    <p>You've reached your limit! Go out and Network!</p>
                )}
        </div>
    );
}

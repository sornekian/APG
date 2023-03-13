import { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewItem';
import { getNews } from '../../utilities/news-api';

export default function NewsList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        async function getArticles() {

            const response = await getNews()
            setArticles(response.articles)

        }

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

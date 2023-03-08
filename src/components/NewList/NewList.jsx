import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewItem';

export default function NewsList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await fetch(
                'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=559fe344d7be450da5408ca58cf74e73'
            );
            const data = await response.json();
            setArticles(data.articles);
        };

        getArticles();
    }, []);

    return (
        <div>
            {articles && articles.length > 0 ? (
                articles.map(article => {
                    return (
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    );
                })
            ) : (
                <p>You've reached your limit! Go out and Network!</p>
            )}
        </div>
    );
}

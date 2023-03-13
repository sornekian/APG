import './NewsItem.css';


export default function NewsItem({ article }) {

    return (
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={article.urlToImage || 'default-image-url'} alt="news-pic" />
                <h3><a href={article.url} style={{ color: 'black' }}>{article.title}</a></h3>
                <p className="news-description">{article.description}</p>
                <p className="news-author">written by: {article.author}</p>
            </div>
        </div>
    )
}

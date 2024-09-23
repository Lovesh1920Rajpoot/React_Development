import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, ImageUrl, newsUrl}= this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem"}}>
                    <img src={!ImageUrl? "https://ichef.bbci.co.uk/news/1024/branded_news/78d9/live/1a9bc070-64c3-11ef-8c32-f3c2bc7494c6.jpg" :ImageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href ={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

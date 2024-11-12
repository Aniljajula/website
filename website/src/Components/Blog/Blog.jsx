import React from 'react';
import './Blog.css';
import Blogimage from '../Assets/blogg.jpeg';
import CardImage1 from '../Assets/blogg.jpeg'; // Add image imports for cards
import CardImage2 from '../Assets/blogg.jpeg';
import CardImage3 from '../Assets/blogg.jpeg';
import CardImage4 from '../Assets/blogg.jpeg'; // Add image imports for cards
import CardImage5 from '../Assets/blogg.jpeg';

const Blog = () => {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <img src={Blogimage} alt="Street" className="blog-image" />
                <div className="header-content">
                    <h1>BLOG</h1>
                    <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
                </div>
            </header>
            
            <div className="blog-content">
                <div className="blog-main">
                    <div className="card">
                        <img src={CardImage1} alt="Card 1" className="card-image" />
                        <div className="card-body">
                            <h2 className="card-title">Card Title 1</h2>
                            <p className="card-description">This is a description of the blog post. It provides a brief overview of the content.</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src={CardImage2} alt="Card 2" className="card-image" />
                        <div className="card-body">
                            <h2 className="card-title">Card Title 2</h2>
                            <p className="card-description">This is a description of the blog post. It provides a brief overview of the content.</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src={CardImage3} alt="Card 3" className="card-image" />
                        <div className="card-body">
                            <h2 className="card-title">Card Title 3</h2>
                            <p className="card-description">This is a description of the blog post. It provides a brief overview of the content.</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CardImage4} alt="Card 3" className="card-image" />
                        <div className="card-body">
                            <h2 className="card-title">Card Title 3</h2>
                            <p className="card-description">This is a description of the blog post. It provides a brief overview of the content.</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CardImage5} alt="Card 3" className="card-image" />
                        <div className="card-body">
                            <h2 className="card-title">Card Title 3</h2>
                            <p className="card-description">This is a description of the blog post. It provides a brief overview of the content.</p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                </div>
                
                <aside className="blog-sidebar">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">🔍</button>
                    </div>
                    
                    <div className="sidebar-section">
                        <h2>Recent Comments</h2>
                        {/* Add Recent Comments here */}
                    </div>
                    
                    <div className="sidebar-section">
                        <h2>Archives</h2>
                        {/* Add Archives content here */}
                    </div>
                    
                    <div className="sidebar-section">
                        <h2>Categories</h2>
                        <p>No categories</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blog;

import React from 'react'
import { Link } from 'react-router-dom'
import LoadIcon from '../utility/LoadIcon'

export default function BlogCard({img, title,title_slug, full_description, followers}) {


    return (
        <div>
            <div className='blog-card'>
                <div className='card-img'>
                    <img src={img} alt={title} />
                    <LoadIcon icon = {title}/>
                </div>
                <div className='card-head'>
                    <h1>{title}</h1>
                    <p>Followers {followers}</p>
                </div>
                <div className='card-body'>
                    <p>{full_description}</p>
                </div>
                <div className='card-foot'>
                    <Link to={`/blog/${title_slug}`} className='link-blog_details'><button type='button'> Learn more...</button></Link>
                    <Link to={`/login/${title_slug}`} className='link-blog_details join'><button type='button'>Join</button></Link>

                </div>
                
            </div>

        </div>
    )
}

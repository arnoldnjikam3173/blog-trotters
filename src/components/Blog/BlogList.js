import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'

export default function BlogList() {
    const [data, setData] = useState([]);
    const [error, seterror] = useState(false);

    useEffect(() => {
        fetchBlogdata();
    },[]);

    const fetchBlogdata = async () => {
        try {
        const recuperation = await axios.get('http://localhost:8080/api/v1/type');
        const alldata = await recuperation.data;
        setData(alldata);
        } catch (error) {
            seterror(true);
        } 
    }
        if (error) {
            return <div>Y a une erreur</div>
        }

    return (
        <div className='container windows-blog'>
            <h1>Category</h1>
            <div className='blog-cards'>
                {data.map((element, index) => {
                    return(
                        <div key={index}>
                            <BlogCard {...element}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

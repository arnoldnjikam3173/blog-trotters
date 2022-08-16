import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function BlogDetails() {
    const params = useParams();
    const title = params.title

    const [data, setData] = useState([]);
    const [error, seterror] = useState(false);

    useEffect(() => {
        fetchBlogdata();
    },[]);

    const fetchBlogdata = async () => {
        try {
        const recuperation = await axios.get(`http://localhost:8080/api/v1/type/${title}`);
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
        <div>
            {data.map((element, index) =>{
                return(
                    <p>{element.title}</p>
                )
            })}
        </div>
    )
}

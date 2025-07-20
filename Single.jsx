import NavBar from "./NavBar";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Single() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSingleBlog() {
            try {
                const response = await axios.get(`https://687af378abb83744b7ee487b.mockapi.io/Blogss/${id}`);
                if (response.status === 200) {
                    setBlog(response.data);
                } else {
                    alert("Something went wrong");
                }
            } catch (error) {
                alert("Error fetching blog");
            }
        }
        fetchSingleBlog();
    }, [id]);

    async function deleteBlog() {
        try {
            const response = await axios.delete(`https://687af378abb83744b7ee487b.mockapi.io/Blogss/${id}`);
            if (response.status === 200) {
                navigate("/");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            alert("Error deleting blog");
        }
    }

    return (
        <>
            <NavBar />
            <div>
                <img src={blog.image} alt="" />
                <h1>{blog.title}</h1>
                <h2>{blog.Description}</h2>
                <h1>{blog.subtitle}</h1>
                <button onClick={deleteBlog} className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete Me
                </button>
            </div>
        </>
    );
}

export default Single;

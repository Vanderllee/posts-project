import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

import { axiosInstance } from '../../utils';
import { useLocation } from 'react-router'

export default function Home() {

    const [ posts, setPosts ] = useState([]);
    const { search } = useLocation()


    useEffect(() => {
        const fetchPosts = async () => {
          const response = await axiosInstance.get(`/posts${search}`)

          setPosts(response.data)
        }

        fetchPosts()

    }, [ search ])

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={ posts } /> 
                <Sidebar />
            </div>
        </>
    )
}
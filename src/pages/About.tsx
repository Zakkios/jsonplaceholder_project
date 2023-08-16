import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
  const { pathname } = useLocation()
  const [ posts, setPosts ] = useState<Post[]>([])
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(response => setPosts(response))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='max-w-screen-xl mx-auto'>
      { posts.length === 0 ? "chargement" : posts.filter((post:Post) => post.userId === 10).map((post:Post) => { 
        return (<ul key={post.id} className='my-3 text-center'>
          <li><span className='font-bold'>Titre : </span><br />{post.title}</li>
          <li><span className='font-bold'>Contenu : </span><br />{post.body}</li>
          </ul>)}) }
    </div>
  )
}

export default About
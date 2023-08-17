import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './Home'

const About = () => {
  interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
  const { pathname } = useLocation()
  const currentUserId:number = parseInt(pathname.split('/')[2])
  const [ posts, setPosts ] = useState<Post[]>([])

  useEffect(() => {
    if(!isNaN(currentUserId)) {
      getPosts()
      console.log(true)
    } else {
      console.log(false)
    }
  }, [currentUserId])

  const displayPosts = () => {
    if(isNaN(currentUserId)) {
      return <Home />
    } else {
      if(posts.length === 0) {
        return 'chargement'
      } else {
        return posts.filter((post:Post) => post.userId === currentUserId).map((post:Post) => { 
          return (<ul key={post.id} className='my-3 text-center'>
            <li><span className='font-bold'>Titre : </span><br />{post.title}</li>
            <li><span className='font-bold'>Contenu : </span><br />{post.body}</li>
            </ul>)})
      }
    }
  }

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(response => setPosts(response))
  }


  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-3xl font-bold text-center my-9'>
        { isNaN(currentUserId) ? 'Selectionnez un utilisateur' : `Articles de l'utilisateur ${ currentUserId }` }
      </h1>
      { displayPosts() }
    </div>
  )
}

export default About
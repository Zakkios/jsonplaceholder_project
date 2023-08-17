import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  interface User {
    "id": number,
    "name": string,
    "username": string
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
        }
      }
    }

  const [users, setUsers] = useState<User[]>([])
  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(response => setUsers(response))
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Liste des utilisateurs : </h1>
      <ul className='text-center'>
        { users.length === 0 ? "chargement" : users.map((user:User) => { 
          return (
            <li key={user.id} className='my-5'>
                <Link to={`/about/${user.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'> 
                {user.name} 
                </Link>
            </li>)}) }
      </ul>
    </>
  );
}

export default Home
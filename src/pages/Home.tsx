import React, { useEffect, useState } from 'react'

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
        { users.length === 0 ? "chargement" : users.map((user:User) => <li key={user.id}>{user.name}</li>) }
      </ul>
    </>
  );
}

export default Home
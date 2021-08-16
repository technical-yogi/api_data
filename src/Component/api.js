import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Component = () => {
   const [apiData, setapiData] = useState([]);
   const [count, setCount] = useState(2);
   useEffect(() => {
      console.warn(count)
      axios.get(`https://reqres.in/api/users?page=${count}`).then(({ data }) => {

         setapiData(data.data);
      }).catch((err) => {
         console.warn(err)
      })
   }, [count])

   const menu = apiData.map((value) => {
      return (
 //taking only full name of user and email address from 
         <ul class="list-group">

            <li class="list-group-item ">Name={value.first_name} {value.last_name}</li>
            <li class="list-group-item list-group-item-dark">Email={value.email}</li>
         </ul>

      )

   })

   return (
      <div>
         <div className="prev">
            {menu}
            <button className="btn btn-lg btn-danger" onClick={() => setCount(count - 1)}>Previous</button>
            <button className="btn btn-lg btn-success" onClick={() => setCount(count + 1)}>Next</button>
         </div>
      </div>
   )
}

export default Component;
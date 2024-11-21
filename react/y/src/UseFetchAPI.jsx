import React from 'react'

function UseFetchApi() {
   const response= fetch("https://dummyjson.com/recipes");
   response.then(()=>{

    console.log(response)
   })
   .catch( ()=>console.log(error))
  return (
    <div>UseFetchApi</div>
  )
}
export default UseFetchApi
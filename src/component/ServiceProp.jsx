import React from 'react'

import "./serviceProp.css"
function ServiceProp({heading,description}) {
  return (
         <div className="App apple">
      <img
        src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
        className="photo"
        alt="tree with a person"
      />
      <article className="explanation">
        <h5>{heading}</h5>
        <p>
        {description}
        </p>
      </article>
    </div>
  )
}

export default ServiceProp
import React from 'react'
import ServiceProp from './ServiceProp'

import "./service.css"
function Service() {
  return (
    <div className='grid'>
      <ServiceProp heading="road"  description="hello "/>
      <ServiceProp heading="highway" />
      <ServiceProp heading="hello" />
      <ServiceProp />
      <ServiceProp />
      <ServiceProp />
    </div>
  )
}

export default Service
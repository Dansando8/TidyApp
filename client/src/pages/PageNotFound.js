import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

function PageNotFound() {
  return (
    <div>
    
    <h1>Sorry, page not found...</h1>

    <LinkContainer to={`/dashboard`} style={{borderRadius:'2px', border:'none', backgroundColor:'grey', margin:'10px 10px' }}>
        <Button>Dashboard</Button>
    </LinkContainer>

    </div>
  )
}

export default PageNotFound
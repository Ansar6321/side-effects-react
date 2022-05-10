import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <div>
      404_Page not found...
      <button onClick={e => navigate('/')}>Go Home, u r drunk!</button>
    </div>
  )
}

export default NoMatch
import React from 'react'
import Header from '../Header'

function LayOut({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default LayOut
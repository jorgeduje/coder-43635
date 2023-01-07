import React from 'react'

const Orders = ( {order} ) => {
  return (
    <div>
        <h2>{order?.buyer?.name}</h2>
    </div>
  )
}

export default Orders
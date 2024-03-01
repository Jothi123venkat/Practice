import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nested = () => {
  return (
    <div>
      <Outlet/>
        <Link to="/admin">admin</Link>
        <Link to="/admin/products">products</Link>
        <Link to="/admin/categories">Categories</Link>
    </div>
  )
}

export default Nested

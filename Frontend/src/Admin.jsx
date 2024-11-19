import React from 'react'
import AdminNav from './components/AdminNav'
import AdminCarousalAdd from './pages/AddCarousal'
import AddTextForm from './pages/AddTextForm'
import NewsAdminPanel from './pages/NewsAdminPanel'


const Admin = () => {
  return (
    <>
    <AdminNav />
    <AdminCarousalAdd />
    <AddTextForm />
    <NewsAdminPanel />
    
    </>
  )
}

export default Admin
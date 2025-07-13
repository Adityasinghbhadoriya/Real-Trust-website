import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import {Toaster} from 'react-hot-toast'
import AdminDashboard from './Admin/AdminDashboard'
import Signup from './Admin/Signup'
import Login from './Admin/Login'
import AllContacts from './Admin/AllContacts'
import AllClients from './Admin/AllClients'
import AllProjects from './Admin/AllProjects'
import AllSubscriptions from './Admin/AllSubscriptions'
import CreateProject from './Admin/CreateProject'
import UpdateProject from './Admin/UpdateProject'
import { AdminProtectedRoute } from './Components/ProtectedRoute';
import CreateClient from './Admin/CreateClient'

const App = () => {
  return (
    <div className=' overflow-y-scroll scrollbar-hide'>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/contact' element= {<Contact/>} />

        {/* Admin Routes */}
        <Route
          path='/admin/dashboard'
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route path='/admin/signup' element= {<Signup/>} />
        <Route path='/admin/login' element= {<Login/>} />
        <Route path='/admin/contacts' element= {<AllContacts/>} />
        <Route path='/admin/clients' element= {<AllClients/>} />
        <Route path='/admin/create-client' element= {<CreateClient/>} />
        <Route path='/admin/projects' element= {<AllProjects/>} />
        <Route path='/admin/create-project' element= {<CreateProject/>} />
        <Route path='/admin/update-project/:id' element= {<UpdateProject/>} />
        <Route path='/admin/subscriptions' element= {<AllSubscriptions/>} />

      </Routes>
      <Toaster/>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ApplicationForm from './components/Application'
import { SidebarComponent } from './components/SidebarComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StudentDashboard } from './components/StudentDashboard'
import TermsAndConditions from './components/TermsAndConditions'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar />   <div className='flex '>  <SidebarComponent />  <Home /></div>      </>
    },

    {
      path: "/login",
      element: <> <Navbar />    <div className='flex'>  <SidebarComponent />  <Login /></div>                 </>
    },
    {
      path: "/register",
      element: <> <Navbar />     <div className='flex'>  <SidebarComponent />  <Signup /></div>    </>
    },
    {
      path: "/Studentdashboard",
      element: <> <Navbar />     <div className='flex'>  <SidebarComponent />  <StudentDashboard /></div>    </>
    },
    {
      path: "/Application",
      element: <> <Navbar />     <div className='flex'>  <SidebarComponent />  <ApplicationForm /></div>    </>
    },
    {
      path: "/terms-conditions",
      element: <> <Navbar />     <div className='flex'>  <SidebarComponent />  <TermsAndConditions /></div>    </>
    },
  ])


  return (
    <div className='bg-white h-auto w-full '>
      <RouterProvider router={router} />
    </div>

  )
}

export default App

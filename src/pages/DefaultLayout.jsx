import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet />
    </>
  )
}

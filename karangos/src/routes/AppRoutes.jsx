import { Routes, Route } from 'react-router-dom'


import Homepage from '../pages/Homepage'


import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'
// Caminho para o arquivo da página da autora
import Autora from '../pages/autora/Autora'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />


   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/autora" element={ <Autora /> } />

 </Routes>
}
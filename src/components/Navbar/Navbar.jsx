import {
    PiHouseFill,
    PiMagnifyingGlassBold,
    PiCompassDuotone,
    PiFilmSlateDuotone,
    PiMessengerLogoDuotone,
    PiHeartBold,
    PiPlusSquareBold
} from 'react-icons/pi'
import NavbarItem from './NavbarComponents/NavbarItem'
import '../../App.css'
import { useState } from 'react'

const Navbar = () => {
  
  const createPost = () => {
    
  }

  return (
    <div className='pl-1 w-[345px] h-screen border-r-2'>
        <section className='p-[20px]'>
        <h3 className='instagram pb-10 text-2xl'>Instagram</h3>
            <ul className='flex flex-col gap-5'>
              <NavbarItem title="Inicio">
                <PiHouseFill/>
              </NavbarItem>
              <NavbarItem title="Busqueda">
                <PiMagnifyingGlassBold/>
              </NavbarItem>
              <NavbarItem title="Explorar">
                <PiCompassDuotone/>
              </NavbarItem>
              <NavbarItem title="Reels">
                <PiFilmSlateDuotone/>
              </NavbarItem>
              <NavbarItem title="Mensajes">
                <PiMessengerLogoDuotone/>
              </NavbarItem>
              <NavbarItem title="Notificaciones">
                <PiHeartBold/>
              </NavbarItem>
              <NavbarItem onClick={createPost} title="Crear">
                <PiPlusSquareBold/>
              </NavbarItem>
              <NavbarItem title="Perfil">
                
              </NavbarItem>
            </ul>
        </section>
    </div>
  )
}

export default Navbar
const NavbarItem = ({children, title, ...attributes}) => {
  return <li {...attributes} className="flex items-center h-[50px] pl-3 gap-3 text-3xl hover:bg-gray-100 hover:rounded-lg hover:h-[50px] hover:ease-in duration-200 hover:cursor-pointer hover:scale-105">
    {children}
    <span className="text-base">{title}</span>
  </li>
}

export default NavbarItem
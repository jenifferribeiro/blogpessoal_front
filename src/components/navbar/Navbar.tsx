import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";



function Navbar() {
 
  const navigate = useNavigate();
  
  const {handleLogout} = useContext(AuthContext) 

  function logout(){

    handleLogout()
    alert('O usuário foi desconectado com sucesso!')
    navigate('/login')
  }

  return (
    <>
     <div className='w-full bg-violet-400 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>
              <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
              </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Postagens</div>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to ='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
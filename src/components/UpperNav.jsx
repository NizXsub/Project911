import { useEffect , useState} from 'react'
import {Link as Exlink} from 'react-router-dom';

export default function UpperNav(){
    const token = localStorage.getItem("auth_token");
    const [user, setUser] = useState()


    async function getUser(auth_token){
        const res = await fetch("https://homework-collab-production.up.railway.app/auth/users/me/",{
            method: "GET",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            
        })
        const data = await res.json();
        setUser(data)
    }

    useEffect(()=>{
        getUser(token);
    },[])

    // console.log(user)
  return (
    <nav className='h-16 w-screen border-[1px] border-solid border-[#DDE1E4] flex justify-between items-center px-16'>
        <div>
            <Exlink to="/">
                <img src="" alt="" />
                ScholarSync
            </Exlink>
        </div>
        {
            !user?

            <ul className='flex gap-4'>
            <li className='h-10 px-4 bg-[#1B5299] text-white border-solid border-[#424B54] border-[1px] flex items-center'>
                <Exlink to="/signup">
                    Sign Up
                </Exlink>
            </li>
            <li className='h-10 px-5 bg-[#0CCA4A] text-white border-solid border-[#424B54] border-[1px] flex items-center'>
                <Exlink to="/signin">
                    Login
                </Exlink>
            </li>
        </ul>
        :
        <div>Hello {user.username}</div>
        }
    </nav>
  )
}

import React from 'react'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';

export default function DeleteAccount(props) {
    console.log(props)
    const token = localStorage.getItem("token", localStorage.token)
    const id = jwt_decode(token).user
    const url = `https://afternoon-wave-89398.herokuapp.com/dash/user`
//"http://localhost:8000/dash/user"

    const onClick = async e => {
        e.preventDefault();
        try {
          const response = await fetch(
            url + `/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                  token: localStorage.token
                },
            }
          );
          const parseRes = await response.json();
          localStorage.removeItem("token")
          props.setAuth(false)
          toast.success('Account Was Deleted')
        } catch (err) {
            console.error(err.message);
          }
        };
    return (
        <div>
            <button onClick={e => onClick(e)} className='button danger'>Delete Account</button>
        </div>
    )
}

import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';

export default function UpdateAccount(props) {

    const token = localStorage.getItem("token", localStorage.token)
    const id = jwt_decode(token).user

    const [input, setInput] = useState({
        password: ""
      });
      const { password } = input;
      
      const url = "https://afternoon-wave-89398.herokuapp.com/dash/user"
      //http://localhost:8000/dash/user
      const onChange = e =>
            setInput({ ...input, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = {password};
console.log(body)
          const response = await fetch(
            url + `/${id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                  token: localStorage.token
                },
              body: JSON.stringify(body)
            }
          );
          const parseRes = await response.json();

          toast.success('Update Password Successful')
        } catch (err) {
            console.error(err.message);
          }
        };

    return (
        <div>
            <h3>update your password</h3>
            <form onSubmit={onSubmitForm} className="update">
            <input
                type="password"
                name="password"
                value={password}
                placeholder="New Password"
                onChange={e => onChange(e)}
            />
            <br />
            <br />
        <button className="button success">Update</button>
            </form>
        </div>
    )
}

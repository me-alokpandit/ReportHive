import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
const schema = yup
    .object()
    .shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8).max(16),
    })

const Login = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleLogin = async (data) => {
        const response = await axios.post('http://localhost:9000/api/login', data);
        if (response?.data?.code == 200) {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "success"
            });
            // navigate('/user-profile')
            localStorage.setItem("userInfo", JSON.stringify(response?.data?.data));   //to save data in local storage and for get data "getItem "
            if (response?.data?.data?.userType == "user") {
                navigate('/user-profile')
            } else if (response?.data?.data?.userType == "admin") {
                navigate('/admin-profile')
            }

        } else {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "error"
            });
        }

    }
    return (
        <>
            <Navbar />
            <div className='container-fluid c p-4'>
                <div className="row"></div>
                <div className='row coll1'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4 c1 '>

                        <form onSubmit={handleSubmit((d) => handleLogin(d))}>
                            <div className="form-group">
                                <p className="text-start">User <b className='text-mycolor'> Login</b></p>

                                Email address <br /><input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    {...register('email')}
                                />
                                {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
                            </div>
                            <br />
                            <div className="form-group">
                                Password
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    {...register('password')}
                                />
                                {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
                            </div><br /><br />
                            <button type="submit" className="btn w-100 mb-3 btn-danger" onClick={handleLogin}>
                                Submit
                            </button>
                        </form>



                    </div>
                    <div className='col-sm-4'></div>
                </div>
                <div className="row "></div>

            </div>
        </>
    )
}

export default Login;
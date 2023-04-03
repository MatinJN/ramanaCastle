import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { deleteGender, fetchAllGenders } from '../../features/genders/genderSlice';
const GenderList = () => {
    const navigate = useNavigate
    const dispatch = useDispatch();
    const { genders } = useSelector(state => state.gender)
    
    console.log("genderxzx",genders);

    useEffect(() => {
        dispatch(fetchAllGenders())
    }, [])

    const deleteHandler = ({ id }) => {
        try {
            dispatch(deleteGender(id))
            setTimeout(() => {
                window.location.reload(false);
                toast.success("Color Deleted")
            }, 400)
        } catch (error) {
            toast.error("yeniden ceht edin")
        }
    }

    const colums = [
        {
            name: 'Name'
        },
        {
            name: 'Slug'
        },
        {
            name: 'Status'
        },
        {
            name: 'Order'
        },
        
    ]


    return (
        <div className='container mt-5'>
            <h1>Gender List</h1>
            <table className='table'>
                <thead>
                    <tr>
                        {colums.map((colums) => (
                            <th>{colums.name}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        genders.map((gender) => (
                            <tr key={gender.id}>
                                <td>{gender.name}</td>
                                <td>{gender.slug}</td>
                                <td>{gender.status}</td>
                                <td>{gender.order}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() =>deleteHandler(gender) }>Delete</button>
                                    <Link to={`genderedit/${gender.id}`}><button className='btn btn-info' >Edit</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default GenderList
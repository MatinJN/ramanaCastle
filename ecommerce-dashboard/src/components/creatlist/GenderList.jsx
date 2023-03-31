import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteGender, fetchAllGenders } from '../../features/genders/genderSlice';
const GenderList = () => {
    const navigate = useNavigate
    const dispatch = useDispatch();
    const { gender } = useSelector(state => state.gender)
    
    console.log("genderxzx",gender.translations);

    useEffect(() => {
        dispatch(fetchAllGenders())
    }, [])

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
                        gender.map((gender) => (
                            <tr key={gender.id}>
                                <td>{gender.name}</td>
                                <td>{gender.slug}</td>
                                <td>{gender.status}</td>
                                <td>{gender.order}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => dispatch(deleteGender(gender.id))}>Delete</button>
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
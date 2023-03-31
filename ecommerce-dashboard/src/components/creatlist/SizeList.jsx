import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteSize, fetchAllsize } from '../../features/size/sizeSlice';

const SizeList = () => {
    const navigate = useNavigate
    const dispatch = useDispatch();
    const { size } = useSelector(state => state.size)
    console.log("salam",size);

    useEffect(() => {
        dispatch(fetchAllsize())
    }, [])

    const colums = [
        {
            name: 'Order'
        },
        {
            name: 'Name'
        },
        {
            name: 'Code'
        },
        {
            name: 'Status'
        },

    ]


    return (
        <div className='container mt-5'>
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
                        size.map((size) => (
                            <tr key={size.id}>
                                <td>{size.order}</td>
                                <td>{size.name}</td>
                                <td>{size.color_code}</td>
                                <td>{size.status}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => dispatch(deleteSize(size.id))}>Delete</button>
                                    <Link to={`sizeedit/${size.id}`}><button className='btn btn-info' >Edit</button></Link>
                                    
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </div>
    )
}

export default SizeList
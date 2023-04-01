import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteMaterials, fetchAllMaterials } from '../../features/materials/materialSlice';

const MaterialList = () => {
    const navigate = useNavigate
    const dispatch = useDispatch();
    const { material } = useSelector(state => state.material)
    console.log("salam",material);

    useEffect(() => {
        dispatch(fetchAllMaterials())
    }, [])

    const deleteHandler = ({ id }) => {
        try {
            dispatch(deleteMaterials(id))
            setTimeout(() => {
                window.location.reload(false);
                toast.success("Color Deleted")
            }, 300)
        } catch (error) {
            toast.error("yeniden ceht edin")
        }
    }

    const colums = [
        {
            name: 'Name'
        },
        {
            name: 'Order'
        },
        {
            name: 'Status'
        },
        {
            name: 'Slug'
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
                        material.map((material) => (
                            <tr key={material.id}>
                                <td>{material.name}</td>
                                <td>{material.order}</td>
                                <td>{material.status}</td>
                                <td>{material.slug}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteHandler()}>Delete</button>
                                    <Link to={`materialedit/${material.id}`}><button className='btn btn-info' >Edit</button></Link>
                                    
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </div>
    )
}

export default MaterialList
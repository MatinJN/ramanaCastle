import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteColor, fetchAllColors } from '../../features/colors/colorSlice';
import { toast } from "react-toastify"
const ColorList = () => {

    const dispatch = useDispatch();
    const { colors } = useSelector(state => state.color)
    useEffect(() => {
        dispatch(fetchAllColors())
    }, [])

    const deleteHandler = ({ id }) => {
        try {
            dispatch(deleteColor(id))
            setTimeout(() => {
                window.location.reload(false);
            }, 300)
            toast.success("Color Deleted")
        } catch (error) {
            toast.error("yeniden ceht edin")
        }
    }


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
                        colors && colors.map((color) => (
                            <tr key={color.id}>
                                <td>{color.order}</td>
                                <td>{color.name}</td>
                                <td>{color.color_code}</td>
                                <td>{color.status}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteHandler(color)}>Delete</button>
                                    <Link to={`coloredit/${color.id}`}><button className='btn btn-info' >Edit</button></Link>

                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </div>
    )
}

export default ColorList

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteColor, fetchAllColors } from '../../features/colors/colorSlice';
const ColorList = () => {

    const dispatch = useDispatch();
    const { colors } = useSelector(state => state.color)
    useEffect(() => {
        dispatch(fetchAllColors())
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
            <h1>Color List</h1>
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
                                    <button className='btn btn-danger' onClick={() => {dispatch(deleteColor(color.id).then(() => {dispatch(fetchAllColors())}))}}>Delete</button>
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

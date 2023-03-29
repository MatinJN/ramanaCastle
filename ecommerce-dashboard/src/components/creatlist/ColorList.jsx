import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteColor, fetchAllColors } from '../../features/colors/colorSlice';





const ColorList = () => {
    
    
    const dispatch = useDispatch();
    const {color} = useSelector(state => state.color)
    console.log('dataA',color);
    useEffect(() => {
        dispatch(fetchAllColors())
    }, [])

    const colums = [
        {
            name:'Order'
        },
        {
            name:'Name'
        },
        {
            name:'Code'
        },
        {
            name:'Status'
        },

    ]


    return (
        <div className='container mt-5'>
           <table className='table'>
            <thead>
                <tr>
                    {colums.map((colums) =>(
                        <th>{colums.name}</th>
                    ))}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    color.map((color) =>(
                        <tr key={color.id}>
                            <td>{color.order}</td>
                            <td>{color.name}</td>
                            <td>{color.color_code}</td>
                            <td>{color.status}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => dispatch(deleteColor(color.id))}>Delete</button>
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

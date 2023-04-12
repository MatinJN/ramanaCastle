import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteCategory, fetchAllCategories } from '../../features/categories/categorySlice';

const CatergoryList = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category)
    console.log(categories);
    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch])

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
            <h1>Category List</h1>
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
                        categories && categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.order}</td>
                                <td>{category.name}</td>
                                <td>{category.title}</td>
                                <td>{category.status}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() =>{dispatch(deleteCategory(category.id)).then(() => dispatch(fetchAllCategories()))}}>Delete</button>
                                    <Link to={`coloredit/${category.id}`}><button className='btn btn-info' >Edit</button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CatergoryList

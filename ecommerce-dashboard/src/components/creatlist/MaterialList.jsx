import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMaterials, fetchAllMaterials } from '../../features/materials/materialSlice';

const MaterialList = () => {
    const dispatch = useDispatch();
    const { materials } = useSelector(state => state.material);

    useEffect(() => {
        dispatch(fetchAllMaterials());
    }, [dispatch]);

    const columns = [
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

    ];

    return (
        <div className='container mt-5'>
            <h1>Material List</h1>
            <table className='table'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.name}>{column.name}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map((material) => (
                        <tr key={material.id}>
                            <td>{material.name}</td>
                            <td>{material.order}</td>
                            <td>{material.status}</td>
                            <td>{material.slug}</td>
                            <td>
                                <button
                                    className='btn btn-danger' onClick={() => {dispatch(deleteMaterials(material.id)).then(() => dispatch(fetchAllMaterials()))}}>Delete</button>
                                <Link to={`materialedit/${material.id}`}>
                                    <button className='btn btn-info'>Edit</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MaterialList;
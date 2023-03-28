import React, { useState } from 'react';

function CreateSome() {
    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }
    const [materialName, setMaterialName] = useState('');
    console.log(materialName);

   

    return (
        <>
            <div className="section">
            <h1>Color</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Color Name:
                    <input
                        type="text"
                        value={colorName}
                        onChange={(event) => setColorName(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Color Code:
                    <input
                        type="text"
                        value={colorCode}
                        onChange={(event) => setColorCode(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="section">
            <h1>Material</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Color Name:
                    <input
                        type="text"
                        value={materialName}
                        onChange={(event) => setMaterialName(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>

    );
}

export default CreateSome;

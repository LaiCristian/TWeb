import React, { useState, useEffect } from 'react';
import { useStore } from './LocalStore';
import './App.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ model: '', color: '', price: '', year: '' });
    const myData = store.myData;

    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localData.model || !localData.color || !localData.price || !localData.year) {
            alert('Complete all fields!');
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            store.addObject(localData);
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
            setLocalData({ model: '', color: '', price: '', year: '' });
        }, 2000);
    };

    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ model: '', color: '', price: '', year: '' });
        localStorage.setItem('myData', JSON.stringify(store.myData));
    };

    const handleUpdateObject = (index: number, newData: any) => {
        store.updateObject(index, newData);
        setIsLoading(true);
        setTimeout(() => {
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

        const dataToUpdate = store.myData[index];
        setLocalData({ name: dataToUpdate.name, address: dataToUpdate.address, phone: dataToUpdate.phone });
        setIsEditing(false);
        setEditingIndex(-1);
    };

    const handleEditObject = (index: number) => {
        const dataToUpdate = store.myData[index];
        setLocalData({ name: dataToUpdate.name, address: dataToUpdate.address, phone: dataToUpdate.phone });
        setIsEditing(true);
        setEditingIndex(index);
        setLocalData({ model: '', color: '', price: '', year: '' });
    };

    const handleSaveObject = () => {
        if (editingIndex >= 0) {
            handleUpdateObject(editingIndex, localData);
            setLocalData({ model: '', color: '', price: '', year: '' });
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (data) {
            store.setMyData(JSON.parse(data));
        } else {
            localStorage.setItem('myData', JSON.stringify(store.myData));
        }
    }, [store]);

    useEffect(() => {
        if (!isLoading) {
            const data = localStorage.getItem('myData');
            if (data) {
                store.setMyData(JSON.parse(data));
            }
        }
    }, [isLoading, store]);

    function cancelEdit(){
        setIsEditing(false);
        setLocalData({ model: '', color: '', price: '', year: '' });
    }

    return (
        <div className="container">
            <div className='start_img'>
                <form className="form" onSubmit={handleAddObject}>
                    <span className='title'>Car Library</span>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Car Model: </span>
                        <input className="input" type="text" placeholder="Model" value={localData.model} onChange={e => setLocalData({ ...localData, model: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Car Color: </span>             
                        <input className="input" type="text" placeholder="Color" value={localData.color} onChange={e => setLocalData({ ...localData, color: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Car Price: </span>  
                        <input className="input" type="text" placeholder="Price" value={localData.price} onChange={e => setLocalData({ ...localData, price: e.target.value })} />
                    </div>
                    <div className='inp_cont'>
                        <span className='inp_txt'>Year of Production: </span>  
                        <input className="input" type="text" placeholder="Year" value={localData.year} onChange={e => setLocalData({ ...localData, year: e.target.value })} />
                    </div>
                    <button className="button" type="submit">{isLoading ? 'Loading...' : 'Register'}</button>
                </form>
                <div className="card_cont">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="card">
                            <div className='card_ins'>
                                <span className='names'>Model: </span><span className='second'>{data.model}</span>
                            </div>
                            <div className='card_ins'>
                            <span className='names'>Color: </span><span className='second'>{data.color}</span>
                            </div>
                            <div className='card_ins'>
                            <span className='names'>Price: </span><span className='second'>{data.price} €</span>
                            </div>
                            <div className='card_ins'>
                            <span className='names'>Year: </span><span className='second'>{data.year}</span>
                            </div>
                            <div className="edit_cont_buttons">
                                <button className="button2" onClick={() => handleEditObject(index)}>Edit</button>
                                <button className="button2" onClick={() => handleDeleteObject(index)}>Delete</button>     
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isEditing && (
                <div className="edit_cont">
                    <div className="edit_main">
                        <span className='title'>Edit</span>
                        <form className="edit_form" onSubmit={handleSaveObject}>
                            <div className='inp_cont_edit'>
                                <span className='inp_txt'>Edit the model </span>  
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Model"
                                    value={localData.model}
                                    onChange={(e) => setLocalData({ ...localData, model: e.target.value })}
                                />
                            </div>
                            <div className='inp_cont_edit'>
                                <span className='inp_txt'>Edit the color </span>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Color"
                                    value={localData.color}
                                    onChange={(e) => setLocalData({ ...localData, color: e.target.value })}
                                />
                            </div>
                            <div className='inp_cont_edit'>
                                <span className='inp_txt'>Edit the price </span>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Price"
                                    value={localData.price}
                                    onChange={(e) => setLocalData({ ...localData, price: e.target.value })}
                                />
                            </div>
                            <div className='inp_cont_edit'>
                                <span className='inp_txt'>Edit the year </span>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Year"
                                    value={localData.year}
                                    onChange={(e) => setLocalData({ ...localData, year: e.target.value })}
                                />
                            </div>
                            <div className="edit_cont_buttons">
                                <button className="button save" type="submit">Save</button>
                                <button className="button cancel" onClick={cancelEdit}>Cancel</button>
                            </div>
                        </form>   
                    </div>
                </div>
            )}   
        </div>
    );
}

export default MyComponent;

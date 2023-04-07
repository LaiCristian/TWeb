import React, { useState } from 'react';
import { useStore } from './LocalStore';
import './App.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ model: '', color: '', price: '', year: '' });

    const myData = store.myData;

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        if (!localData.model || !localData.color || !localData.price || !localData.year) {
            alert('Complete all fields!');
            return;
        }
        store.addObject(localData);
        setLocalData({ model: '', color: '', price: '', year: '' });
    };

    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ model: '', color: '', price: '', year: '' });
    };


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
                    <button className="button" type="submit">Register</button>
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
                            <button className="button2" onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>     
        </div>
    );
}

export default MyComponent;

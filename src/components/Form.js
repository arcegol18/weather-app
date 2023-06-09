import { useState } from 'react';

export const Form = ({newLocation}) => {

    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (city==='' || !city) return;
        console.log({city});
        newLocation(city);
    }

  return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escribe el nombre de una ciudad o municipio"
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className='btn btn-primary input-group-text'
                    type='submit'
                >
                    Buscar
                </button>
            </div>
        </form>
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditLanguage = () => {
    let navigate = useNavigate();

    let {code} = useParams;

    let [languages, setLanguages] = useState({
        fullName: '',
        language: '',
        country: '',
        countryFlagUri: ''
    });

    let { fullName, language, country, countryFlagUri } = languages;

    useEffect(() => {
        loadLanguages();
    }, []);

    const loadLanguages = async () => {
        const result = await axios.get(`http://localhost:9192/languages/language/${code}`);
        setLanguages(result.data);
    }

    const handleInputChange = (e) => {
        setLanguages({ ...languages, [e.target.name]: e.target.value });
    };

    const updateLanguage = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/languages/update/${code}`, languages);
        navigate("/view-languages");
    };

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className='mt-5'>Switch Languages</h2>
            <form onSubmit={(e) => updateLanguage(e)}>
                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='fullName'>
                        Name
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='fullName'
                        id='fullName'
                        required
                        value={fullName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='language'>
                        Language
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='language'
                        id='language'
                        required
                        value={language}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='country'>
                        Country
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='country'
                        id='country'
                        required
                        value={country}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label
                        className='input-group-text'
                        htmlFor='countryFlagUri'>
                        Country Flag Uri
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='countryFlagUri'
                        id='countryFlagUri'
                        required
                        value={countryFlagUri}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className='row mb-5'>
                    <div className="col-sm-2">
                        <button
                            type='submit'
                            className='btn btn-outline-success btn-lg'
                        >
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={'/view-languages'}
                            type='submit'
                            className="btn btn-outline-warning btn-lg"
                        >
                            Cancel
                        </Link>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default EditLanguage

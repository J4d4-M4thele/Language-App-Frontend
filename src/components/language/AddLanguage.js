import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const AddLanguage = () => {

    let navigate = useNavigate();
    const [languages, setLanguages] = useState({
        fullName: '',
        language: '',
        country: '',
        code: '',
        countryFlagUri: ''
    });

    const { fullName, language, country, code, countryFlagUri } = languages;

    const handleInputChange = (e) => {
        setLanguages({ ...languages, [e.target.name]: e.target.value });
    };

    const saveLanguage = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/languages", languages);
        navigate("/view-languages");
    };

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className='mt-5'>Which language do you want to learn?</h2>
            <form onSubmit={(e) => saveLanguage(e)}>
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
                        htmlFor='code'>
                        Code
                    </label>
                    <input
                        className='form-control col-sm-6'
                        type='text'
                        name='code'
                        id='code'
                        required
                        value={code}
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

export default AddLanguage

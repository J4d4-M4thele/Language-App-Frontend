import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LanguageView = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        loadLanguages();
    }, []);

    const loadLanguages = async () => {
        const result = await axios.get(
            "http://localhost:9192/languages",
            {
                validateStatus: () => {
                    return true;
                },
            }
        );
        if (result.status === 302) {
            setLanguages(result.data);
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:9192/languages/delete/${id}`);
        loadLanguages();
    }

    return (
        <section>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Country</th>
                        <th colSpan='3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {languages.map((language, index) => (
                        <tr key={language.id}>
                            <th scope='row' key={index}>
                                {index + 1}
                            </th>
                            <td>{language.fullName}</td>
                            <td>{language.language}</td>
                            <td>{language.country}</td>
                            <td className='mx-2'>
                            <Link to={`/language-profile/${language.id}`} className='btn btn-info'>
                                    <FaEye />
                                </Link>
                            </td>
                            <td className='mx-2'>
                                <Link to={`/edit-languages/${language.id}`} className='btn btn-warning'>
                                    <FaEdit />
                                </Link>
                            </td>
                            <td className='mx-2'>
                                <button 
                                className='btn btn-danger'
                                onClick={() => handleDelete(language.id)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default LanguageView

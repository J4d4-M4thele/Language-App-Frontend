import React, { useEffect, useState } from 'react';
import axios from "axios";

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
                                <button className='btn btn-info'>View</button>
                            </td>
                            <td className='mx-2'>
                            <button className='btn btn-warning'>Edit</button>
                            </td>
                            <td className='mx-2'>
                            <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default LanguageView

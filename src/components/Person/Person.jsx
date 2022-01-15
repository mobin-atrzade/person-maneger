import React from 'react'
import './Person.css';
import { BsFillTrashFill } from 'react-icons/bs'

const Person = ({ fullname, deleted, changed }) => {
    return (
        <div className='card text-white bg-info mb-3 mt-3 w-25 mx-auto'>
            <div className='card-body text-center'>
                <p className='d-block'>{fullname}</p>
                <div className='input-group justify-content-center'>
                    <input type="text" className='form-control w-50' placeholder={fullname} onChange={changed} />
                    <div className='input-group-prepend'>
                        <button className="btn btn-sm btn-danger" onClick={deleted}>
                            <BsFillTrashFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;
import React from 'react'
import ClassficationTable from '../components/ClassificationTable'
import CSVreader from '../components/CSVreader'
//import { BasicTable } from '../components/BasicTable'

function Classification() {
    return (
        <div className='flex'>
            {/* container for sidebar */}
            <div>
                <div className='float-left w-full h-screen bg-slate-700 overflow-auto '>
                    <div className='flex gap-5 p-10 justify-center '>
                        <h1 className='flex text-white '>Marketplace</h1>
                        <select className='text-black'>
                            <option>US</option>
                            <option>UK</option>
                            <option>AU</option>
                            <option>SG</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* container for sidebar */}
            <div className='flex justify-center items-center float-left h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80'>
                <CSVreader />
                <div className='relative bg-sky-50 justify-middle text-left'>
                    <ClassficationTable />
                </div>
            </div>
        </div>
    )
}

export default Classification
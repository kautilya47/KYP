import React, { useState, useEffect } from 'react';

const TableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000');
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);

            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures this effect runs once after the initial render

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                            <thead
                                className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                <tr>
                                    <th scope="col" className=" px-6 py-4">ID</th>
                                    <th scope="col" className=" px-6 py-4">ASIN</th>
                                    <th scope="col" className=" px-6 py-4">MP</th>
                                    <th scope="col" className=" px-6 py-4">Decision</th>
                                    <th scope="col" className=" px-6 py-4">Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className="border-b dark:border-neutral-500" key={item._id}>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{index + 1}</td>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.asin}</td>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.mp}</td>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.decision}</td>
                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.comments}</td>
                                        {/* Add more cells based on your data structure */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TableComponent;
import React, { useState, useEffect } from "react";
import ErrorsTable from "../components/ErrorsTable";
import errordata from "../components/errors_data.json"; // Adjust the import path as needed

function Errors() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [marketplace, setMarketplace] = useState("All");
  const [category, setCategory] = useState("All");
  const [productType, setProductType] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    setData(errordata);
    setFilteredData(errordata); // Initialize filteredData with the entire dataset
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = data.filter((row) => {
        const matchMarketplace = marketplace === "All" || row.mp === marketplace;
        const matchCategory = category === "All" || row.category === category;
        const matchProductType = productType === "" || row.product_type.toLowerCase().includes(productType.toLowerCase());
        const matchKeywords = keywords === "" || row.error_desc.toLowerCase().includes(keywords.toLowerCase());
        return matchMarketplace && matchCategory && matchProductType && matchKeywords;
      });
      setFilteredData(filtered);
    };
    applyFilters();
  }, [marketplace, category, productType, keywords, data]);

  return (
    <React.Fragment>
      <div className="flex">
        <div className="flex w-1/5 bg-slate-700">
          <div className="flex-col p-8">
            <div className="inline-block">
              <h1 className="flex text-white">Marketplace</h1>
              <select className="text-black" value={marketplace} onChange={(e) => setMarketplace(e.target.value)}>
                <option>All</option>
                <option>NA</option>
                <option>EU</option>
                <option>AU</option>
                <option>SG</option>
              </select>
            </div>
            <div className="inline-block">
              <h1 className="flex text-white">Category</h1>
              <select className="text-black" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All</option>
                <option>Toys</option>
                <option>Non-Toys</option>
              </select>
            </div>
            {/* <div>
              <h1 className="text-white">Product type</h1>
              <input type="text" className="text-black" value={productType} onChange={(e) => setProductType(e.target.value)} />
            </div> */}
            <div>
              <h1 className="text-white">Keywords</h1>
              <input type="text" className="text-black" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
          <div className="m-0">
            <ErrorsTable data={filteredData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Errors;
import { useState } from "react";
import NavbarComponent from "./NavbarComponent"
import axios from "axios";

const AddProductComponent = () => {
    let [product_name, setProductName] = useState("")
    let [product_description, setProductDescription] = useState("")
    let [product_cost, setProductCost] = useState("")
    let [product_category, setProductCategory] = useState("")
    let [product_image, setProductImage] = useState("")

    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        setSuccess("")
        setLoading('Please Wait')

        try {
            const product_data= new FormData()
            product_data.append("product_name",product_name)
            product_data.append("product_cost", product_cost)
            product_data.append("product_category",product_category)
            product_data.append("product_description",product_description)
            product_data.append("product_image",product_image)

            const response = await axios.post("https://iank.alwaysdata.net/api/add_product",product_data)
            console.log(response)


            if (response.status === 200) {
                setLoading("")
                setSuccess(response.data.message)
                //clear form
                setProductName("")
                setProductCategory("")
                setProductCost("")
                setProductDescription("")
                setProductImage("")
            }

        } catch (error) {
            setSuccess('')
            setLoading('')
            setError(error.message)
        }
    }
    return(
        <div className="row justify-content-center mt-3">

            <NavbarComponent />
            <div className="col-md-6 card shadow p-4">
                <h2>Add Products</h2>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-danger">{error}</h5>
                <h5 className="text-success">{success}</h5>
                <form onSubmit={handleSubmit}> 
                <input type="text" 
                className="form-control"
                required
                placeholder="Enter Product name"
                value={product_name}
                onChange={(e)=> {setProductName(e.target.value)}}
                />
                <br />

                <input 
                type="number" 
                required
                placeholder="Enter Product Cost"
                value={product_cost}
                onChange={(e)=> {setProductCost(e.target.value)}}
                />
                <br />

                <select  
                required
                onChange={(e)=> {setProductCategory(e.target.value)}}
                className="form-select">
                    <option value="">Select category</option>
                    <option value="Screws">screw</option>
                    <option value="saws">Saws</option>
                    <option value="sheets">sheets</option>
                    <option value="accessories">Accessories</option>
                </select>
                <br />

                <textarea 
                required
                value={product_description}
                onChange={(e)=> {setProductDescription(e.target.value)}}
                rows="7"
                className="form-control"></textarea>
                <br />

                <label htmlFor="" className="form-label">
                    Product Image
                </label>

                <input type="file" 
                accept="image/*"
                onChange={(e)=> {setProductImage(e.target.files[0])}}
                required
                className="form-control" />
                <br />

                <button className="btn btn-primary">Add Product</button>

                </form>
            </div>
            
        </div>
    );
}

export default AddProductComponent;
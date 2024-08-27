import { useState } from "react";
import axios from "axios";
import './additem.css';
import { useNavigate } from 'react-router-dom';
function Product() {
    const navigate=useNavigate()
    const [order, setOrder] = useState({
        productname: "",
        description: "",
        price: "",
        dis: "",
        sku: "",
        quentity: "",
        photo: "",
        p_catogry: "",
        p_tags: "",
    });

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!order.productname) newErrors.productname = "Product Name is required.";
        if (!order.description) newErrors.description = "Description is required.";
        if (!order.price) {
            newErrors.price = "Price is required.";
        } else if (isNaN(order.price)) {
            newErrors.price = "Price must be a number.";
        }
        if (!order.quentity) {
            newErrors.quentity = "Quantity is required.";
        } else if (isNaN(order.quentity)) {
            newErrors.quentity = "Quantity must be a number.";
        }
        if (order.dis && isNaN(order.dis)) {
            newErrors.dis = "Discount must be a number.";
        }
        if (!order.sku) newErrors.sku = "SKU is required.";
        if (!order.p_catogry) newErrors.p_catogry = "Category is required.";
        if (!order.p_tags) newErrors.p_tags = "Tags are required.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post("http://localhost:8020/item_create", order);
            console.log(response.data);
            alert("Product added successfully!");
            navigate("/itemdetails")
            setOrder({
                productname: "",
                description: "",
                price: "",
                dis: "",
                sku: "",
                quentity: "",
                photo: "",
                p_catogry: "",
                p_tags: "",
            });
            setErrors({});
        } catch (error) {
            console.error("There was an error adding the item:", error);
        }
    };

    return (
        <div className="add-product">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input
                    type="text"
                    id="productname"
                    name="productname"
                    value={order.productname}
                    onChange={handleOnChange}
                />
                {errors.productname && <span className="error">{errors.productname}</span>}
                <br />

                <label>Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={order.description}
                    onChange={handleOnChange}
                />
                {errors.description && <span className="error">{errors.description}</span>}
                <br />

                <label>Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={order.price}
                    onChange={handleOnChange}
                />
                {errors.price && <span className="error">{errors.price}</span>}
                <br />

                <label>Discount %:</label>
                <input
                    type="text"
                    id="dis"
                    name="dis"
                    value={order.dis}
                    onChange={handleOnChange}
                />
                {errors.dis && <span className="error">{errors.dis}</span>}
                <br />

                <label>SKU:</label>
                <input
                    type="text"
                    id="sku"
                    name="sku"
                    value={order.sku}
                    onChange={handleOnChange}
                />
                {errors.sku && <span className="error">{errors.sku}</span>}
                <br />

                <label>Quantity:</label>
                <input
                    type="text"
                    id="quentity"
                    name="quentity"
                    value={order.quentity}
                    onChange={handleOnChange}
                />
                {errors.quentity && <span className="error">{errors.quentity}</span>}
                <br />

                <label>Photo:</label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handleOnChange}
                />
                <br />

                <label>Category:</label>
                <input
                    type="text"
                    id="p_catogry"
                    name="p_catogry"
                    value={order.p_catogry}
                    onChange={handleOnChange}
                />
                {errors.p_catogry && <span className="error">{errors.p_catogry}</span>}
                <br />

                <label>Tags:</label>
                <input
                    type="text"
                    id="p_tags"
                    name="p_tags"
                    value={order.p_tags}
                    onChange={handleOnChange}
                />
                {errors.p_tags && <span className="error">{errors.p_tags}</span>}
                <br />

                <button type="submit">Add Product</button>
            </form>
            <br />
        </div>
    );
}

export default Product;

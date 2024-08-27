import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './itemupdate.css'

function UpdateItem(){
    const { id } = useParams();
    const [updateorder,setupdateorder]=useState({

      productname: "",
        description: "",
        price: "",
        dis: "",
        sku: "",
        quentity: "",
        photo: "",
        p_catogry: "",
        p_tags: "",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8020/item_order/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdateorder(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdateorder({
          ...updateorder,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8020/item_update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updateorder._id,
              ...updateorder,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
          
           alert("Item updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='item-update'>

<h2>Product Update Form</h2>

<label>Product Name:</label>
    <input type="text" id="productname" name="productname"  onChange={handleInputChange} value={updateorder?.productname }/><br></br>
  
    <label>Description:</label>
    <input type="text" id="description" name="description"  onChange={handleInputChange} value={updateorder?.description }/><br></br>
    <label>Price:</label>
    <input type="text" id="price" name="price" onChange={handleInputChange} value={updateorder?.price }/><br></br> 
    <label>Discount %:</label>
    <input type="text" id="dis" name="dis"  onChange={handleInputChange} value={updateorder?.dis }/><br></br> 
    <label>SKU:</label>
    <input type="text" id="sku" name="sku"  onChange={handleInputChange} value={updateorder?.sku }/><br></br> 
  
    <label>Quantity:</label>
    <input type="text" id="quentity" name="quentity"  onChange={handleInputChange} value={updateorder?.quentity }/><br></br>
    <label>Photo:</label>
    <input type="text" id="photo" name="photo" onChange={handleInputChange} value={updateorder?.photo }/><br></br> 
    <label>Category:</label>
    <input type="text" id="p_catogry" name="p_catogry"  onChange={handleInputChange} value={updateorder?.p_catogry }/><br></br> 
    <label>Tags:</label>
    <input type="text" id="p_tags" name="p_tags"  onChange={handleInputChange} value={updateorder?.p_tags }/><br></br> 
  
    <button onClick={handleUpdate} >Update Product</button><br></br> <br></br> 
   
   <br></br>
    
        </div>
    )
}
export default UpdateItem;
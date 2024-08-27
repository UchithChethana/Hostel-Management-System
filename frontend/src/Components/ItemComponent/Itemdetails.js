import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './itemdetails.css';
import { useReactToPrint } from 'react-to-print';

function ItemDetails() {
    const componentPDF = useRef();
    const [showdiscounts, setshowdiscounts] = useState([]);
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const [searchkey,setsearchkey]=useState('');

    const getfetchdata = async () => {
        try {
            const data = await axios.get('http://localhost:8020/item');
            console.log(data.data.success);
            if (data.data.success) {
                setshowdiscounts(data.data.data);
            }
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        getfetchdata();
    }, []);

 
    const handledelete = async (id) => {
        const data = await axios.delete('http://localhost:8020/item_delete/' + id);
        if (data.data.success) {
            getfetchdata();
            console.log(data.data.message);
            alert('Item  deleted Successfully!');
        }
    };

    
    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'Total Item Report',
        onBeforeGetContent: () => {
            setIsGeneratingPDF(true);
            return Promise.resolve();
        },
        onAfterPrint: () => {
            setIsGeneratingPDF(false);
            alert('Data saved in PDF');
        }
    });
    const handlesearch = (e) => {

        filterdata(searchkey);
    }
    const filterdata = (searchKey) => {
        const filteredData = showdiscounts.filter(customer =>
            customer && customer.productname && customer.productname.toLowerCase().includes(searchKey.toLowerCase())
        );
        setshowdiscounts(filteredData);
    }
    
    return (
        <div className="showitems">
           <div className='searchbtn'>
        <input  type="search" onChange={(e)=>setsearchkey(e.target.value)} placeholder='Item No' className='in'/> <t></t> 
    <Link id="add-product-btn" to="/add-item">Add Product</Link>
        <button  id='search-btn'  onClick={(e)=>handlesearch(e)}> search </button>
        </div>   
            <div ref={componentPDF} style={{ width: '100%' }}>
                <h2>Total Products</h2> 
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>SKU</th>
                            <th>Quantity</th>
                            <th>Photo</th>
                            <th>Category</th>
                            <th>Tags</th>
                            {!isGeneratingPDF && <th>Action</th>}
                        </tr>
                    </thead>
             
                    <tbody>
                        {showdiscounts.map((e1) => (
                            <tr key={e1._id}>
                                <td>{e1.productname}</td>
                                <td>{e1.description}</td>
                                <td>{e1.price}</td>
                                <td>{e1.dis}</td>
                                <td>{e1.sku}</td>
                                <td>{e1.quentity}</td>
                                <td>{e1.photo}</td>
                                <td>{e1.p_catogry}</td>
                                <td>{e1.p_tags}</td>
                                {!isGeneratingPDF && (
                                    <td>
                                        <a href={`/itemupdate/${e1._id}`}>Edit Product</a>
                                        <button onClick={() => handledelete(e1._id)}>Delete Product</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={generatePDF}>Order Report</button>
        </div>
    );
}

export default ItemDetails;

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './itemrepoart.css';
import { useReactToPrint } from 'react-to-print';

// Register ChartJS components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function ItemRepoart() {
    const componentPDF = useRef();
    const [countlist, setcountlist] = useState([]);
    const [customerlist, setcustomerlist] = useState([]);

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'Total Item Report',
        onBeforeGetContent: () => {
            return Promise.resolve();
        },
        onAfterPrint: () => {
            alert('Data saved in PDF');
        }
    });

    // Fetch data
    const getfetchdata = async () => {
        try {
            const data = await axios.get('http://localhost:8020/item_count');
            const { count } = data.data;
            setcountlist(count);
            setcustomerlist(data.data.data);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        getfetchdata();
    }, []);

    // Sort data by age
    const sortedCustomerList = [...customerlist].sort((a, b) => a.price - b.price);

    // Prepare data for the bar chart
    const chartData = {
        labels: sortedCustomerList.map(order => order.productname),
        datasets: [
            {
                label: 'Product Name',
                data: sortedCustomerList.map(order => order.price),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div className='repoart'>
            <h3>Total Products :</h3>
            {countlist !== null ? (
                <p>Total Products: {countlist}</p>
            ) : (
                <p>Loading...</p>
            )}

            <h3>Products Details :</h3>

            {/* Content to be printed */}
            <div ref={componentPDF} className='pdf-content'>
                <h2 className='pdf-title'>Total Products Report</h2>

                {/* Bar chart */}
                <div className='chart-container'>
                    <Bar data={chartData} />
                </div>

                {/* Table */}
                <table>
                    <thead>
                        <tr>
                        <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>SKU</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
       
                    <tbody>
                        {sortedCustomerList.map((e) => (
                            <tr key={e.order_id}>
                                <td>{e.productname}</td>
                                <td>{e.description}</td>
                                <td>{e.price}</td>
                                <td>{e.dis}</td>
                                <td>{e.sku}</td>
                                <td>{e.quentity}</td>
                           
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button onClick={generatePDF}>Download Report</button>
        </div>
    );
}

export default ItemRepoart;

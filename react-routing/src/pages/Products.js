import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/1">Book</Link>
                </li>
                <li>
                    <Link to="/products/2">TV</Link>
                </li>
                <li>
                    <Link to="/products/3">DVD</Link>
                </li>
            </ul>
        </section>
    );
}

export default Products;
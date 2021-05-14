import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();

    return (
        <section>
            <Link to="/products">Back</Link>
            <h1>Product { params.id }</h1>
        </section>
    );
}

export default ProductDetail;
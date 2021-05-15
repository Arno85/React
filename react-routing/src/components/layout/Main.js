import { Redirect, Route } from 'react-router-dom';
import Products from '../../pages/Products';
import Welcome from '../../pages/Welcome';
import ProductDetail from '../../pages/ProductDetail';

const Main = () => {
    return (
        <main>
            <Route path="/" exact>
                <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
                <Welcome />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
            <Route path="/products/:id">
                <ProductDetail />
            </Route>
        </main>
    );
}

export default Main;
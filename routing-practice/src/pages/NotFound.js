import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="centered">
            <h1>Page Not Found! <Link to="/">Return to Home</Link></h1>
        </div>
    );
}

export default NotFound;
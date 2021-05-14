import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const { id } = params;

    useEffect(() => {
        sendRequest(id);
    }, [sendRequest, id]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (status === 'error') {
        return <p className="centered focused">{ error }</p>;
    }

    if (status === 'completed' && !loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <section>
            <HighlightedQuote
                text={ loadedQuote.text }
                author={ loadedQuote.author }
            />
            <Route path={ match.path } exact>
                <div className="centered">
                    <Link
                        className="btn--flat"
                        to={ `${ match.url }/comments` }>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={ `${ match.path }/comments` }>
                <Comments />
            </Route>
        </section>
    );
}

export default QuoteDetail;
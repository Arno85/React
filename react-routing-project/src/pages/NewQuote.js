import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useEffect } from 'react';

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.replace("/");
        }
    }, [status, history]);

    const addQuoteHandler = (data) => {
        sendRequest(data);
    }

    return (
        <section>
            <QuoteForm
                isLoading={ status === 'pending' }
                onAddQuote={ addQuoteHandler }
            />
        </section>
    );
}

export default NewQuote;
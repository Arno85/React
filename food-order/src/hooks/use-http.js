import { useCallback, useState } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, dataAdapter) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method || 'GET',
                    headers: requestConfig.headers || {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            dataAdapter(data);
        } catch (error) {
            setError(error.message);
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
}

export default useHttp;
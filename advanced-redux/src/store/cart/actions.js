import { cartActions } from '.';
import { rootActions } from '../root';


export const fetchCartData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://learning-react-arno85-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Fetching cart data failed!');
            }

            return await response.json();
        };

        try {
            const cartData = await sendRequest();
            dispatch(cartActions.setCart({
                items: cartData.items || [],
                totalPrice: cartData.totalPrice || 0,
                totalQuantity: cartData.totalQuantity || 0,
            }));
        } catch (e) {
            dispatch(
                rootActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Fetching cart data failed!'
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            rootActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://learning-react-arno85-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                        totalPrice: cart.totalPrice,
                    })
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed!');
            }
        };

        try {
            await sendRequest();
            dispatch(
                rootActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sent cart data successfully!'
                })
            );
        } catch (e) {
            dispatch(
                rootActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending cart data failed!'
                })
            );
        }
    };
}
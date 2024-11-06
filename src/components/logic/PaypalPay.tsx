import { PayPalButtons, PayPalButtonsComponentProps, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';

export default function App() {
    const initialOptions: ReactPayPalScriptOptions = {
        clientId: "YOUR_CLIENT_ID"
    };

    const styles: PayPalButtonsComponentProps["style"] = {
        shape: "rect",
        layout: "horizontal",
    };

    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={styles}/>
            </PayPalScriptProvider>
        </div>
    );
}
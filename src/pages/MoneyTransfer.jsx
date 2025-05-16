import { useEffect, useState } from "react";
import FormFateFactory from "../formFactory";

export default function MoneyTransfer() {

    const [transferSchema, setTransferSchema] = useState(undefined);

    useEffect(() => {
        // Fetch the transfer schema from the server
        const fetchTransferSchema = async () => {
            try {
                const response = await fetch('https://api.form-fatewebsite.website/api/v1/schemas/key/demo-transfer');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTransferSchema(data.data);
            } catch (error) {
                console.error('Error fetching login schema:', error);
            }
        };

        fetchTransferSchema();
    }, [])
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Money Transfer</h1>
            {transferSchema ? (
                <FormFateFactory
                    formDefinition={transferSchema}
                    onSubmit={(data) => {
                        alert('Signup form submitted:' + JSON.stringify(data));
                    }}
                />
            ) : (
                <div className="flex items-center justify-center h-64">
                    {/* spinner multicolor with tailwind v4 */}
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 border-t-2 border-t-transparent"></div>
                </div>
            )}

            {/* <form>
                <label className="block mb-2">
                    <span className="text-gray-700">Amount</span>
                    <input type="number" className="mt-1 block w-full border rounded p-2" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Recipient</span>
                    <input type="text" className="mt-1 block w-full border rounded p-2" />
                </label>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Transfer</button>
            </form> */}
        </div>
    );
}
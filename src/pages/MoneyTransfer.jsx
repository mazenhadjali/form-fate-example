export default function MoneyTransfer() {
    // const form = useForm({ schema: transferSchema });
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Money Transfer</h1>
            {/* Plug your react-form-fate money transfer form here */}
            <form>
                <label className="block mb-2">
                    <span className="text-gray-700">Amount</span>
                    <input type="number" className="mt-1 block w-full border rounded p-2" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Recipient</span>
                    <input type="text" className="mt-1 block w-full border rounded p-2" />
                </label>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Transfer</button>
            </form>
        </div>
    );
}
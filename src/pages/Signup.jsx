export default function Signup() {
    // const form = useForm({ schema: signupSchema });
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            {/* Plug your react-form-fate signup form here */}
            <form>
                <label className="block mb-2">
                    <span className="text-gray-700">Email</span>
                    <input type="email" className="mt-1 block w-full border rounded p-2" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Password</span>
                    <input type="password" className="mt-1 block w-full border rounded p-2" />
                </label>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Signup</button>
            </form>
        </div>
    );
}
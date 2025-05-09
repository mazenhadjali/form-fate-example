import { useEffect, useState } from "react";
import FormFateFactory from "../formFactory";

export default function Login() {
    // const form = useForm({ schema: loginSchema });
    const [logiSchema, setLogiSchema] = useState(undefined);

    useEffect(() => {
        // Fetch the login schema from the server
        const fetchLoginSchema = async () => {
            try {
                const response = await fetch('https://api.form-fatewebsite.website/api/v1/schemas/key/demo-login');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLogiSchema(data.data);
            } catch (error) {
                console.error('Error fetching login schema:', error);
            }
        };

        fetchLoginSchema();
    }, [])

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {logiSchema ? (
                <FormFateFactory
                    formDefinition={logiSchema}
                    onSubmit={(data) => {
                        console.log('Form submitted:', data);
                    }}
                />
            ) : (
                <div className="flex items-center justify-center h-64">
                    {/* spinner multicolor with tailwind v4 */}
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 border-t-2 border-t-transparent"></div>
                </div>
            )}
        </div>
    );
}


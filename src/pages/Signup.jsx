import { useEffect, useState } from "react";
import FormFateFactory from "../formFactory";
import { deserializeWithFunctions } from "../utils";

export default function Signup() {
    const [signupSchema, setSignupSchema] = useState(undefined);

    useEffect(() => {
        // Fetch the signup schema from the server
        const fetchSignupSchema = async () => {
            try {
                const response = await fetch('https://api.form-fatewebsite.website/api/v1/schemas/key/demo-signup');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSignupSchema(data.data);
            } catch (error) {
                console.error('Error fetching signup schema:', error);
            }
        };

        fetchSignupSchema();
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            {signupSchema ? (
                <FormFateFactory
                    formDefinition={deserializeWithFunctions(signupSchema)}
                    onSubmit={(data) => {
                        console.log('Signup form submitted:', data);
                    }}
                />
            ) : (
                <div className="flex items-center justify-center h-64">
                    {/* spinner multicolor with tailwind v4 */}
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 border-t-2 border-t-transparent"></div>
                </div>
            )}
        </div>
    );
}

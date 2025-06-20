export function deserializeWithFunctions(schema) {
    const x = JSON.stringify(schema)
    const obj = JSON.parse(x);

    function reviveFunctions(value) {
        if (typeof value === 'string') {
            const trimmed = value.trim();
            if (/^function\s*\(|^function\s+anonymous|^\(\s*.*?\s*\)\s*=>|^\w+\s*=>/.test(trimmed)) {
                try {
                    return eval(`(${trimmed})`);
                } catch (e) {
                    console.warn(`Failed to parse function string:`, e);
                    return value;
                }
            }
        } else if (Array.isArray(value)) {
            return value.map(item => reviveFunctions(item));
        } else if (typeof value === 'object' && value !== null) {
            for (const key in value) {
                if (Object.hasOwn(value, key)) {
                    value[key] = reviveFunctions(value[key]);
                }
            }
        }
        return value;
    }

    return reviveFunctions(obj);
}

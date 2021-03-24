import { useState } from "react";

export default function useGlobal() {
    const [form, setForm] = useState(0);

    return {
        form,
        setForm
    }
}
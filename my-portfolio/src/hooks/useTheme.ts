import { useState, useEffect } from "react";

export function useTheme():{theme:string; toggle:()=>void}{
    const [theme,setTheme] = useState(() => localStorage.getItem("theme") ?? "light");
    useEffect(() => {
        localStorage.setItem("theme",theme);
        document.documentElement.setAttribute("data-theme",theme);
    },[theme]);
    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    return {theme,toggle};
}
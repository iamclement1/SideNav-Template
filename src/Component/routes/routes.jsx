import { Route, Routes } from "react-router-dom";
import Hero from "../../Pages/Hero";


export default function routes() {
    return (
        <main>
            <Routes>
                <Route path="/" element={ <Hero /> } />
            </Routes>
        </main>
    )
}

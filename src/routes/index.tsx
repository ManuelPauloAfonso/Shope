import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1> GOT LOST ? </h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/styles/index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@/app/providers/StoreProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

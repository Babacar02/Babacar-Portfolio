import ReactDOM from 'react-dom/client';
import App from './src/components/App.jsx' ;
import "./src/css/index.css";
import { BrowserRouter } from "react-router-dom";
/* {Renders app}**/
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

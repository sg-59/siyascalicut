import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import { store,persistor } from './Pages/Redux/store.jsx';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
<App />
</PersistGate>
</Provider>
  

)

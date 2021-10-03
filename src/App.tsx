import React from 'react';
import { Provider } from 'react-redux';


import store from 'Store/index';

import CategoryListingPage from "Page/CategoryListingPage";

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <CategoryListingPage />
            </div>
        </Provider>
    );
}

export default App;

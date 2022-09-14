import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Counter from './Counter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider {...{ store }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="counter" element={<Counter />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)

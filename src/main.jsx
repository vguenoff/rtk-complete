import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Counter from '@/components/Counter'
import BulletinBoard from '@/components/BulletinBoard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider {...{ store }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="bulletinBoard" element={<BulletinBoard />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)

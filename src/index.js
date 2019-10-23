import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import {BrowserRouter} from 'react-router-dom'
import i18n from './i18n'
import { Provider } from 'react-redux'
import store from './_store/index'

ReactDOM.render(
	<I18nextProvider i18n={ i18n }>
        <BrowserRouter>  
        <Provider store={store}>    
	        <App />
	    </Provider>
	    </BrowserRouter>
	</I18nextProvider>,
document.getElementById('root'));
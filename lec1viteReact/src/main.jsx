import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx';

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    )
}
// const reactElement = {
//     type : 'a',
//     props:{
//         href : 'https://www.google.com',
//         target: '_blank'
//     },
//     children : 'Google'
// }
const anotherElement = (
    <a href="https://www.google.com" target="_blank">
        Google
    </a>
);
const anotheruser = "ChaiAurReact";
 
const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Google', anotheruser
);
createRoot(document.getElementById('root')).render(
    <>
    <App />
    <MyApp />
    {anotherElement}
    {reactElement}
    </>
)




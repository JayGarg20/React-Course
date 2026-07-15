function customRender(reactElement, container){
    // const {type, props, children} = reactElement;
    // const domElement = document.createElement(type);
    // domElement.innerHTML = children;
    // domElement.setAttribute('href', props.href);
    // domElement.setAttribute('target', props.target);
    // container.appendChild(domElement);


    const {type, props, children} = reactElement;
    const domElement = document.createElement(type);
    domElement.innerHTML = children;
    for (const prop in props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type : 'a',
    props:{
        href : 'https://www.google.com',
        target: '_blank'
    },
    children : 'Google'
} 



const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)

const heading = React.createElement(
            "h1",
        {
            className:'head',
            id:'title',
            
        },
        "Heading 1"
        )

const heading2 = React.createElement(
            "h1",
        
        {
            className:'head',
            id:'title',
            
        },
        "Heading 2"
        )

const container = React.createElement(
            'div',
        {
            id:'container'
        },
        [heading,heading2]
        //in react when we have to pass multiple child we can pass it as an array as above
        )
        //react element is nothing but a normal object
console.log(heading);
        //core of react will always be there . 
        //what changes is how you modify data on to the DOM. 
        //that is when second library React Dom comes into picture
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)

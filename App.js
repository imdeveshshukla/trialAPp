import ReactDOM from 'react-dom'
import { createElement as cr} from 'react';
const head = cr(
    "h2",
    {
        id:"title",
        key:"h1"
    },
    "React Element"
);

//JSX
const head2 = <>
<h1>This is Jsx Elem</h1>
</>;

const MyfunctionalComponent = () => (
    <div>
        {console.log("This is From functional component")}
        {head}
        {head2}
        <h2>Hello From functional Component</h2>
        <h3>Hello Fomr Functional Component</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('reactelem'));
root.render(<MyfunctionalComponent/>);


// ReactDOM.render(head, document.getElementById('reactelem'));


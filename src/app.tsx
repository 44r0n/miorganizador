import { createRoot } from 'react-dom/client';

function render() {
	const root = createRoot(document.getElementById('app'));
	root.render(<h2 className='text-3xl font-bold underline'>Hello from React!</h2>);
}

render();
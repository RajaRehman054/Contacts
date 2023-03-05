import { useState } from 'react';
import './App.css';

function App() {
	const props = ['name', 'email', 'tel', 'address', 'icon'];
	const opts = { multiple: true };

	async function getContacts() {
		const [contacts, setContacts] = useState([]);
		try {
			const contacts = await navigator.contacts.select(props, opts);
			handleResults(contacts);
		} catch (ex) {
			console.log(ex);
		}
	}
	const handleClick = async () => {
		getContacts();
	};
	return (
		<div className='App'>
			<button onClick={handleClick}>Click Me</button>
			<p>{contacts[0]}</p>
		</div>
	);
}

export default App;

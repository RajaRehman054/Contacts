import { useState } from 'react';
import './App.css';

function App() {
	const props = ['name', 'email', 'tel', 'address', 'icon'];
	const opts = { multiple: true };
	const [contact, setContacts] = useState([]);

	async function getContacts() {
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
			{contact !== [] ? <p>{contact[0]} </p> : null}
		</div>
	);
}

export default App;

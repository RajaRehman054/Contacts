import './App.css';

function App() {
	const props = ['name', 'email', 'tel', 'address', 'icon'];
	const opts = { multiple: true };

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
		</div>
	);
}

export default App;

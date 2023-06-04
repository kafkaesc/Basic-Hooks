import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';
import './output.css';

export default function App() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

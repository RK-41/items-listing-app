import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				);
				setUsers(response.data);
			} catch (error) {
				console.error('Error fetching users', error);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className='item-list'>
			{users.map((user) => (
				<ItemCard key={user.id} user={user} />
			))}
		</div>
	);
};

export default ItemList;

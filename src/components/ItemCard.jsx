/* eslint-disable react/prop-types */
const ItemCard = ({ user }) => {
	return (
		<div className='item-card'>
			<h2>{user.name}</h2>
			<p>
				<strong>Username:</strong> {user.username}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
			<p>
				<strong>Company:</strong> {user.company.name}
			</p>
		</div>
	);
};

export default ItemCard;

import React from 'react';


const Card = ({name,id,mail}) => {
	return(
		<div className = "tc bg-black br3 pa3 ma2 dib shadow-5 grow">
			<img alt = "robots" src = {`https://robohash.org/${id}?size=200x200`} />
			<div className = "bg-yellow">
				<h1>{name}</h1>
				<h3>{mail}</h3>
			</div>
		</div>
	);
}     

export default Card;
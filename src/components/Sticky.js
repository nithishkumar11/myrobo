import React from 'react';

const Sticky = (props)=>{
	return(
	<div style = {{overflow:'scroll',border:'5px solid black-90',height:'800px'}}>
		{props.children}
	</div>
		);
}

export default Sticky;
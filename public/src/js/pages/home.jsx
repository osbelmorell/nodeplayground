import React from 'react';

const Home = ({title , content}) =>
{
	//console.log(prop);
	return (
		<div>
			<h1>Hello {title}</h1>
			<p>{content || 'no content'}</p>
		</div>
	)
}

export default Home;
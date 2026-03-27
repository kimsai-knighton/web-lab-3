import { useState, useEffect } from 'react';
function CountryCard({name, discrpt, imgUrl}) {
	
	const [likes, setLikes] = useState(() => {
    	const saved = localStorage.getItem(`likes-${name}`);
    	return saved ? parseInt(saved) : 0;
  	});

	useEffect(() => {
    	localStorage.setItem(`likes-${name}`, likes);
  	}, [likes, name]);

  	const setLike = () => {
    	setLikes(likes + 1);
  	};


	return (
    <div style={{
		border: '2px solid #000000',
		padding: '10px',
		display: 'flex',
		width: '400px',
		height: 'auto',
		flexDirection: 'column',
		borderRadius: '8px',
		fontFamily: 'Bahnschrift',
		color: 'black',
		alignItems: 'center',
		gap: '10px'
	}}>
    	<img src={imgUrl} alt={name} style={{ width: '98%', borderRadius: '8px' }} />
		<h3 style={{ margin: 0 }}>{name}</h3>
		<p style={{ margin: 0, textAlign: 'left'}}>{discrpt}</p>
		<button onClick={setLike} style={{ marginTop: 'auto', backgroundColor: '#e7dcef', color: 'black', fontFamily: 'Bahnschrift', fontSize: '18px', cursor: 'pointer'}}

		>💜 Понравилось: {likes}</button>
    </div>
  );
}

export default CountryCard;
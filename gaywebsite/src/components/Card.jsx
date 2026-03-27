function CountryCard({name, discrpt, imgUrl}) {

	return (
    <div style={{ border: '2px solid #000000', padding: '10px', display: 'flex', width: '400px', height: 'max-content', alignContent: 'center', flexDirection: 'column', borderRadius: '8px', fontFamily: 'Bahnschrift', color: 'black' }}>
      <img src={imgUrl} alt={name} style={{ width: '90%' }} />
	  <h3>{name}</h3>
      <p>{discrpt}</p>
    </div>
  );
}

export default CountryCard;
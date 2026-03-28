import { useState, useEffect } from 'react';
function Form({ onAddCountry }) {

	const [name, setName] = useState('');
	const [discrpt, setDiscrpt] = useState('');
	const [imgUrl, setImgUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// Передаем объект с новой страной в родительский компонент
		onAddCountry({
			name,
			discrpt,
			imgUrl: imgUrl || 'https://img.freepik.com/premium-psd/error-404-3d-icon_158757-6518.jpg?semt=ais_hybrid&w=740'
		});


		setName('');
		setDiscrpt('');
		setImgUrl('');
  	};

	return (
	<div style={{ padding: '20px', fontFamily: 'Bahnschrift', color: 'black' }}>
    	<h2 style={{ fontSize: '20px', marginBottom: '15px', color: 'black' }}>Добавить новую страну</h2>
      
    	<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="name">Название:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f3f3f3', color: 'black' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="discrpt">Описание:</label>
          <textarea 
            value={discrpt} 
            onChange={(e) => setDiscrpt(e.target.value)} 
            required 
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px', backgroundColor: '#f3f3f3', color: 'black' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="imgUrl">Ссылка на фото (URL):</label>
          <input 
            type="text" 
            value={imgUrl} 
            onChange={(e) => setImgUrl(e.target.value)} 
            placeholder="https://example.com/image.jpg"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#f3f3f3', color: 'black' }}
          />
        </div>

        <button type="submit" style={{
          backgroundColor: '#f3f3f3',
          color: 'black',
          padding: '10px',
          border: '2px solid #e1d4ba',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
		  fontFamily: 'Segoe Script',
		  fontSize: '17px'
        }}>
          Создать карточку
        </button>
      </form>
    </div>
  );
}

export default Form;
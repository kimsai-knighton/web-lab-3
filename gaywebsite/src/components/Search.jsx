import { useState, useEffect } from 'react';
function Search({ searchTerm, onSearchChange }) {

	return (
	<div>
		<div style={{
			marginTop: "10px",
			color: "black",
			fontFamily: "Bahnschrift"
		}}>Фильтр по названию</div>
	
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => onSearchChange(e.target.value)}
				placeholder="Введите название..."
				style={{
					width: '90%',
					padding: '10px',
					borderRadius: '8px',
					border: '1px solid #ccc',
					fontFamily: 'Bahnschrift',
					boxSizing: 'border-box',
					border: '2px solid #e1d4ba',
					backgroundColor: '#f3f3f3',
					color: 'black'
				}}
			/>
      </form>
	</div>
  );
}

export default Search;
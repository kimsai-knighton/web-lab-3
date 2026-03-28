import { useState } from 'react'
import './App.css'

import CountryCard from './components/Card'
import Form from './components/Form'
import Seacrh from './components/Search'

import RU from './assets/Countries/RU.webp'
import USA from './assets/Countries/USA.jpg'

function App() {
	let [countries, setCountries] = useState([
        { 
            id: 1, 
            name: "Россия", 
            discrpt: "Россия — многонациональное государство с широким этнокультурным многообразием.", 
            imgUrl: RU 
        },
        { 
            id: 2, 
            name: "США", 
            discrpt: "США отличаются очень большим разнообразием ландшафтов и климатических зон.", 
            imgUrl: USA 
        },
		{ 
            id: 3, 
            name: "Япония", 
            discrpt: "Япония (яп. 日本 Нихон), официальное название — Государство Япония — островное государство в Восточной Азии. Находится в Тихом океане к востоку от Японского моря.", 
            imgUrl: 'https://i.pinimg.com/originals/46/65/d9/4665d9e829bfffc957e4e0d252ab41de.jpg' 
        },
        { 
            id: 4, 
            name: "Канада", 
            discrpt: "Канада — государство в Северной Америке, крупнейшее по площади на этом континенте и второе по площади в мире. По численности населения 36-е государство в мире.", 
            imgUrl: 'https://avatars.mds.yandex.net/i?id=d328d28fece6e1dcb8bf52847b28bf2f_l-4936408-images-thumbs&n=13' 
        },
    ]);

	const addNewCountry = (newCountry) => {
			const countryWithId = { ...newCountry, id: Date.now() };
			setCountries([...countries, countryWithId]);
	};

	return (
		<div className="my-app">
			<div>
				<div className="form">
					<Form onAddCountry={addNewCountry} />
				</div>

				<div className="search">
					<Seacrh />
				</div>
			</div>
			<div className='countries'>
                {countries.map((country) => (
                    <CountryCard 
                        key={country.id}
                        name={country.name} 
                        discrpt={country.discrpt} 
                        imgUrl={country.imgUrl} 
                    />
                ))}
            </div>
		</div>
		

	)
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import CountryCard from './components/Card';
import RU from './assets/Countries/RU.webp'
import USA from './assets/Countries/USA.jpg'

function App() {
	const [count, setCount] = useState(0)


	return (
		<div className="my-app">
			<CountryCard name="Россия" discrpt="Россия — многонациональное государство с широким этнокультурным многообразием" imgUrl={RU}/>
			<CountryCard name="США" discrpt="США отличаются, ввиду своих размеров, очень большим разнообразием ландшафтов, климатических зон, растительного и животного мира" imgUrl={USA}/>
		</div>	
	)
}

export default App

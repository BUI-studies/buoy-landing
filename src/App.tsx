import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ModalMenu from './components/ModalMenu/ModalMenu'

function App() {
	const { t } = useTranslation()
	const [menuVisible, setMenuVisible] = useState<boolean>(false)

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<h2 className="t__h2">{t('heroTitle')}</h2>
			</div>
			<div>
				<p>ПОРУЧ ДІТИ</p>
			</div>
			<button onClick={() => setMenuVisible(true)}>MENU</button>
			{menuVisible && <ModalMenu setVisible={setMenuVisible} />}
		</>
	)
}

export default App

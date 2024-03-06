import { useTranslation } from 'react-i18next'

function App() {
	const { t } = useTranslation()

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<h2 className="t__h2">{t('heroTitle')}</h2>
			</div>
			<div>
				<p>ПОРУЧ ДІТИ</p>
			</div>
		</>
	)
}

export default App

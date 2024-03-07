// import { useTranslation } from 'react-i18next'
import logo from './assets/logo.svg'
import './hero.scss'

function App() {
	// const { t, i18n } = useTranslation()

	return (
		<>
			<section className="hero">
				<div className="hero__container">
					<div>
						<div>
							<p>ПОРУЧ ДІТИ</p>
						</div>
						<div>
							<p>МЕНЮ</p>
						</div>
					</div>
					<div>
						<picture>
							<img src={logo} alt="Main logo" />
						</picture>
					</div>
					<div>
						<h2>{/**Осюда текст з і18 */}</h2>
						<p>{/**І сюда теж */}</p>
						<a href="#">{/**Та і тут теж текст з і18 */}</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default App

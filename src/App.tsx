import { useTranslation } from 'react-i18next'
import LangSwitcher from './components/LangSwitcher/LangSwitcher'
import logo from './assets/logo.svg'
import gifAdult from './assets/bg-animation.gif'
import gifCh from './assets/bg-animation-ch.gif'
import flowers from './assets/flowers.svg'
import './scss/sections/hero.scss'

function App() {
	const { t, i18n } = useTranslation()

	return (
		<>
			<section className="hero">
				{i18n.language === 'ch' && <img src={flowers} className="hero__bg-flowers" />}
				<img
					src={i18n.language === 'ad' ? gifAdult : gifCh}
					alt="Background animation"
					className={i18n.language === 'ad' ? 'hero__bg-animation' : 'hero__bg-animation-ch'}
				/>
				<div className="hero__container">
					<div className="hero__switch-and-menu-container">
						<div className="hero__lang-switch-container">
							<p className="t__text-thin">ПОРУЧ ДІТИ</p>
							<LangSwitcher />
						</div>
						<div className="hero__menu-button-container">
							<p className="t__text-thin">МЕНЮ</p>
							<svg
								className="hero__menu-button"
								width="81"
								height="80"
								viewBox="0 0 81 80"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="40.7021" cy="40" r="39" stroke="#39C8D3" strokeWidth="2" />
								<path
									d="M21.7021 35H69.7021"
									stroke="#39C8D3"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<path
									d="M12.7021 45H60.7021"
									stroke="#39C8D3"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					</div>
					<div>
						<picture>
							<img src={logo} alt="Main logo" />
						</picture>
					</div>
					<div className="hero__text-block-container">
						<div className="hero__text-block">
							<h2 className="hero__title">{t('heroTitle')}</h2>
							<p className="hero__subtitle">{t('heroSubText')}</p>
							<a href="#" className="hero__call-to-action-btn">
								{t('heroCallToAction')}
							</a>
						</div>
					</div>
				</div>
			</section>
			<section></section>
		</>
	)
}

export default App

import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher, ModalMenu } from '../../components'
import logo from '../../assets/logo.svg'
import flowers from '../../assets/flowers.svg'
import flowersMobile from '../../assets/flowers-2.svg'
import './styles.scss'

const Hero: FC = () => {
	const [menuVisible, setMenuVisible] = useState<boolean>(false)
	const { t, i18n } = useTranslation()

	const handleMenuOpen = () => setMenuVisible(true)

	return (
		<section className={`hero hero__${t('background')}`}>
			{i18n.language === 'ch' && (
				<picture>
					<source media="(max-width: 766px)" srcSet={flowersMobile} />
					<img
						alt="Hand drawn flowers"
						src={flowers}
						className={window.innerWidth <= 767 ? 'hero__bg-flowers-mobile' : 'hero__bg-flowers'}
					/>
				</picture>
			)}
			<div className="hero__container">
				<div className="hero__header">
					<div className="hero__switcher">
						<p className="t__text-thin">ПОРУЧ ДІТИ</p>
						<LangSwitcher />
					</div>
					<div className="hero__menu">
						<p className="t__text-thin">МЕНЮ</p>
						<svg
							onClick={handleMenuOpen}
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
				{menuVisible && <ModalMenu setVisible={setMenuVisible} />}
				<picture>
					<img src={logo} alt="Main logo" className="hero__logo" />
				</picture>
				<div className="hero__info">
					<h2 className="hero__title">{t('heroTitle')}</h2>
					<p className="hero__subtitle">{t('heroSubText')}</p>
					<a href="#" className="hero__call-to-action-btn">
						{t('heroCallToAction')}
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero

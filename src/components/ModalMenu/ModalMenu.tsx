import { FC } from 'react'
import { ModalMenuPropTypes } from './types'
import './styles.scss'

const ModalMenu: FC<ModalMenuPropTypes> = ({ setVisible }) => {
	const handleClose = () => setVisible(false)

	return (
		<div className="modal-wrapper">
			<div className="menu">
				<div className="menu__close">
					<p className="t__text-thin">ЗАКРИТИ</p>
					<svg
						onClick={handleClose}
						className="menu__close-btn"
						width="80"
						height="80"
						viewBox="0 0 80 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="40" cy="40" r="39" stroke="#001018" strokeWidth="2" />
						<path
							d="M50.2142 51.2142L28.7856 29.7856M50.2142 29.7856L28.7856 51.2142"
							stroke="#001018"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className="menu__list-container">
					<ul className="menu__list">
						<li className="menu__list-item active">
							<a href="#" className="t__menu-item menu__list-link">
								Головна
							</a>
						</li>
						<li className="menu__list-item">
							<a href="#" className="t__menu-item menu__list-link">
								Безкоштовні уроки
							</a>
						</li>
						<li className="menu__list-item">
							<a href="#" className="t__menu-item menu__list-link">
								Особистий кабінет
							</a>
						</li>
						<li className="menu__list-item">
							<a href="#" className="t__menu-item menu__list-link">
								Контакти
							</a>
						</li>
					</ul>
				</div>
				<div className="menu__socials">
					<a
						href="https://t.me/bui_studies"
						target="_blank"
						className="t__text-thin menu__social-link"
					>
						Telegram
					</a>
					<a
						href="https://www.youtube.com/@bui-studies"
						target="_blank"
						className="t__text-thin menu__social-link"
					>
						YouTube
					</a>
					<a
						href="https://www.instagram.com/buistudies/"
						target="_blank"
						className="t__text-thin menu__social-link"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>
	)
}

export default ModalMenu

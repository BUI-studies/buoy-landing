import { FC } from 'react'
import { studyFormatPropsList } from './helpers'
import ytIco from '../../assets/yt-ico.png'
import smallArrow from '../../assets/small-arrow.png'
import './styles.scss'

const StudyFormat: FC = () => {
	return (
		<section className="study-format">
			<div className="study-format__container">
				<h2 className="study-format__header t__h2">Формати навчання</h2>
				<div className="study-format__cards">
					<div className="study-format__free">
						<h3 className="study-format__name t__h3">Безкоштовний курс на ютуб</h3>
						<p className="study-format__pricing t__secondary-text">Абсолютлі 0 грн</p>
						<p className="study-format__summary t__secondary-text">
							Якийсь мєлкий текст, де сказано, що навіть безкоштовні уроки дають дохуя корисного
						</p>
						<ul className="study-format__free-list t__main-text">
							{studyFormatPropsList.map(prop => (
								<li key={prop.id} className="study-format__list-item">
									{prop.text}
								</li>
							))}
						</ul>
						<a
							href="https://www.youtube.com/@bui-studies"
							target="_blank"
							className="study-format__yt-link t__secondary-text"
						>
							Втикати відео <img src={ytIco} alt="YouTube ico" />
						</a>
					</div>
					<div className="study-format__paid">
						<h3 className="t__h3">Я з багатої сім’ї</h3>
						<p className="study-format__pricing study-format__pricing--paid t__secondary-text">
							Скікись грн/міс*
						</p>
						<p className="study-format__summary t__secondary-text">
							Не виходить вчитись самому, дамо тобі няньку, яка попу підітре, купуй нижче
						</p>
						<ul className="study-format__paid-list t__main-text">
							{studyFormatPropsList.map(prop => (
								<li key={prop.id} className="study-format__list-item">
									{prop.text}
								</li>
							))}
						</ul>
						<a href="#" className="study-format__mentors-link t__secondary-text">
							Знайти свого ментора
						</a>
						<div className="tooltip">
							*Ментор відповідає з Пн-Пт в робочі години, або за згодою сторін.
						</div>
					</div>
				</div>
				<div className="study-format__notice">
					<span>
						Шось про <img src={smallArrow} alt="Small arrow" />
					</span>
					<p className="t__notice-text">
						навчаєшся в своєму темпі, маєш всі необхідні матеріали, але сам відповідаєш за свої
						досягнення
					</p>
				</div>
			</div>
		</section>
	)
}

export default StudyFormat

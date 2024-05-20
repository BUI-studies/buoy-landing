import { FC } from 'react'
import { studyResults } from './helpers'
import './styles.scss'

const StudyResults: FC = () => {
	return (
		<section className="study-results">
			<div className="container">
				<h2 className="study-results__header t__h2">Результат після навчання</h2>
				<div className="study-results__cards">
					<div className="study-results__free">
						<h3 className="study-results__name t__h3">Безкоштовний курс на ютуб</h3>
						<ul className="study-results__free-list t__main-text">
							{studyResults.map(result => (
								<li key={result.id}>{result.text}</li>
							))}
						</ul>
					</div>
					<div className="study-results__paid">
						<h3 className="study-results__name t__h3">Курс з ментором</h3>
						<ul className="study-results__paid-list t__main-text">
							{studyResults.map(result => (
								<li key={result.id}>{result.text}</li>
							))}
						</ul>
					</div>
					<div className="study-results__chalice">
						<p>🏆</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StudyResults

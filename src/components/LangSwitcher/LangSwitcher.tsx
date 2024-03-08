import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './styles.scss'

const LangSwitcher: FC = () => {
	const { i18n } = useTranslation()

	const handleChange = () => {
		if (i18n.language === 'ad') {
			i18n.changeLanguage('ch')
		} else {
			i18n.changeLanguage('ad')
		}
	}

	return <input type="checkbox" onChange={handleChange} className="lang__switcher" />
}

export default LangSwitcher

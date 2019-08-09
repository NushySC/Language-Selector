import React, {Component} from 'react';
import LanguageContext from '../Contexts/LanguageContext';

export default class LanguageSelector extends Component {
	static contextType = LanguageContext;

	render() {
		const text =
			this.context.language === 'english'
				? 'Select a language'
				: 'Выбрать язык';
		return (
			<div className="segment ui">
				{/* this is not working  */}
				{text}

				<i
					className="flag us"
					onClick={() => this.context.onLanguageChange('english')}
				/>
				<i
					className="flag ru"
					onClick={() => this.context.onLanguageChange('russian')}
				/>
			</div>
		);
	}
}

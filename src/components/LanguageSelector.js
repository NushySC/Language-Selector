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
			<div className="label ui">
				{/* this is not working  */}
				{text}

				<i
					style={{margin: '0.5em'}}
					className="flag us"
					onClick={() => this.context.onLanguageChange('english')}
				/>
				<i
					style={{margin: '0.5em'}}
					className="flag ru"
					onClick={() => this.context.onLanguageChange('russian')}
				/>
			</div>
		);
	}
}

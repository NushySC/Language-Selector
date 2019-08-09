import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;
	render() {
		const text = this.context.language === 'english' ? 'Name' : 'Имя';
		return (
			<div style={{width: '50%', marginTop: '2em'}}
			className="ui field">
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;

import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

class Button extends React.Component {
	static contextType = LanguageContext;
	render() {
		const text = this.context.language === 'english' ? 'Submit' : 'Отправить';
		return (
			<ColorContext.Consumer>
				{color => (
					<button className={`ui button ${color}`}>{text}</button>
				)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;

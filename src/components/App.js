import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

class App extends React.Component {
	state = {language: 'english'};

	onLanguageChange = language => {
		this.setState({language});
	};

	static contextType = LanguageContext;
	render() {
		return (
			<div className="ui container">
				<div className="label ui">
					{/* this is not working  */}
					<LanguageContext.Consumer>
						{value =>
							value === 'english'
								? 'Select a language'
								: 'Выбрать язык'
						}
					</LanguageContext.Consumer>
					<i
						className="flag us"
						onClick={() => this.onLanguageChange('english')}
					/>
					<i
						className="flag ru"
						onClick={() => this.onLanguageChange('russian')}
					/>
				</div>
				<ColorContext.Provider value="yellow">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
//

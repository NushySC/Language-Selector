import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="yellow">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
//

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	html {
		overflow-y: scroll;
	}
	
	body {
		font-family: Open-Sans, Helvetica, Sans-Serif;
		padding: 20px 40px;
		cursor: grab;
	}

	body:active {
		cursor: grabbing;
	}

	a {
		text-decoration: none;
		color: black;
	}
	
	* {
		box-sizing: border-box;
	}
`;
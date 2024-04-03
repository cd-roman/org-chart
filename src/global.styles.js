import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	
	body {
		font-family: Open-Sans, Helvetica, Sans-Serif;
		padding: 20px 40px;
		cursor: grab;
		overflow: hidden;
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

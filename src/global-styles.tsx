import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
      background-color: var(--primaryBg);
      color: var(--textColor);
      transition: 0.3s;
    }
    html[data-theme=light] {
        --primary:#ff68b1;
		--primaryBg: #f0f0f0;
		--primaryBgDark: #d9d9d9;
        --textColor: #000
    }

    html[data-theme=dark] {
        --primary:#ff68b1;
		--primaryBg: #000;
		--primaryBgDark: #d9d9d9;
        --textColor: #fff
    }
    :root {
	}
`;

export default GlobalStyles;

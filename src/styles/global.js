import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  -webkit-font-smoothing: antialiased;

  *::-webkit-scrollbar {
    width: 22px;
    height: 22px;
    border-radius: 9999px;
}

*::-webkit-scrollbar-corner {
    background-color: transparent;
}

*::-webkit-scrollbar-thumb {
    width: 6px;
    background-color: transparent;
    border-radius: 80px;
    box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.COLORS.GRAY_100};
    border: solid 8px transparent;
}
}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  outline: none;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`;
import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./themeContext";

function Theme(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <body className={`${context.theme}-image`}>
          <Button />
        </body>
      )}
    </ThemeContextConsumer>
  );
}

Image.contextType = ThemeContextConsumer;

export default Theme;

import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

// TODO this is a simple example of visual testing with storybook, please refer to https://storybook.js.org/docs/basics/introduction/ to see the complete documentation
storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
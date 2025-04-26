// packages/web-components/src/index.tsx
import r2wc from "@r2wc/react-to-web-component";
import MyComponent from "./MyComponent";

const MyWebComponent = r2wc(MyComponent, {
  props: {
    name: "string",
  },
});

if (!customElements.get("my-component")) {
  customElements.define("my-component", MyWebComponent);
}

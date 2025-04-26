// packages/ui/src/index.ts
import r2wc from "@r2wc/react-to-web-component";
import MyComponent from "./MyComponent";

// 변환
const MyWebComponent = r2wc(MyComponent, {
  props: {
    name: "string",
  },
});

// 등록
if (!customElements.get("my-component")) {
  customElements.define("my-component", MyWebComponent);
}

export { MyWebComponent };

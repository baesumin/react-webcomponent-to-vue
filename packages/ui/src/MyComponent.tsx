// packages/ui/src/MyComponent.tsx
import React from "react";

interface MyComponentProps {
  name: string;
}

export default function MyComponent({ name }: MyComponentProps) {
  return <div>Hello, {name} from React!</div>;
}

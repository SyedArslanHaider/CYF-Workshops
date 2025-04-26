import { Header } from "./header";
import { Main } from "./main";

export function App() {
  const body = document.createElement("body");

  body.appendChild(Header());
  body.appendChild(Main());

  return body;
}
import { Parser } from "html-to-react";

export default function HTMLRender({ data }) {
  return Parser().parse(data);
}

export type State =
  | "normal"
  | "singleHeader"
  | "twoHeaders"
  | "singleHeader"
  | "headerCodeblock"
  | "headerManyParagraphs"
  | "headerManyParagraphsImage"
  | "headerParagraphImage"
  | "image"
  | "blockquote"
  | "manyImages"
  | "twoHeaders"
  | "headerSingleParagraph"
  | "headerList"
  | "headerImage"
  | "singleHeader"
  | "headerManyParagraphs";

export type Element = {
  type:
    | "heading"
    | "image"
    | "list"
    | "code_block"
    | "paragraph"
    | "blockquote";
  value: string;
  level?: number;
  id: number;
  slide: number;
};

export type Slide = {
  number: number;
  state: State;
};

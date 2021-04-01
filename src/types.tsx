export type State =
  | "normal"
  | "singleHeader"
  | "twoHeaders"
  | "singleHeader"
  | "headerCodeblock"
  | "headerBlockquote"
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

export type ElementType =
  | "heading"
  | "image"
  | "list"
  | "code_block"
  | "paragraph"
  | "blockquote";

export type Element = {
  type: ElementType;
  value: string;
  level?: number;
  id: number;
};

export type Slide = {
  state: State;
  elements: Element[];
};

export interface Builder {
  add: (type: ElementType, elements: Element[]) => State;
  remove: (type: ElementType, elements: Element[]) => State;
}
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Element } from "../../types";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledButton = styled.button`
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledList = styled.ul<{ selected: boolean }>`
  white-space: pre-wrap;
  font-size: 1.3em;
  padding-left: 1em; // fix lists' left padding
  border: ${({ selected }) => (selected ? "1px solid red" : "none")};
`;

function List({
  item,
  removeElement,
  changeElementValue,
}: {
  item: Element;
  removeElement: (id: number) => void;
  changeElementValue: (id: number, value: string) => void;
}) {
  const [selected, setSelected] = useState(false);
  const editingElement = useRef<HTMLUListElement | null>(null);

  function editHeading() {
    editingElement.current &&
      editingElement.current.setAttribute("contenteditable", "true");
    setSelected(true);
  }

  function finishEditing(event: React.FocusEvent<HTMLUListElement>) {
    editingElement.current &&
      editingElement.current.setAttribute("contenteditable", "false");
    setSelected(false);
    if (event.target.innerText === "") {
      removeElement(item.id);
    } else {
      console.log(2, event.target.innerText);
      changeElementValue(item.id, event.target.innerText);
    }
  }

  function changeHeadingText(event: any) {}

  function remove() {
    removeElement(item.id);
  }

  function sanitizeHTML(text: string) {
    var element = document.createElement("div");
    element.innerText = text;
    return element.innerHTML;
  }

  return (
    <Container>
      <StyledList
        selected={selected}
        ref={editingElement}
        onInput={changeHeadingText}
        onBlur={finishEditing}
        onFocus={editHeading}
        tabIndex={-1}
        data-id={item.id}
        dangerouslySetInnerHTML={{
          // React can't deal with a content editable list and manage its children
          __html: item.value
            .split("\n")
            .map((item) => `<li>${sanitizeHTML(item)}</li>`)
            .join(""),
        }}
      ></StyledList>
      {selected && <StyledButton onMouseDown={remove}>X</StyledButton>}
    </Container>
  );
}

List.displayName = "List";

export default List;

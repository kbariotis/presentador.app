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

const StyledParagraph = styled.p<{ selected: boolean }>`
  font-size: 1.3em;
  padding: 5px;
  border: ${({ selected }) => (selected ? "1px solid red" : "none")};
`;

function Paragraph({
  item,
  removeElement,
  changeElementValue,
}: {
  item: Element;
  removeElement: (id: number) => void;
  changeElementValue: (id: number, value: string) => void;
}) {
  const [selected, setSelected] = useState(false);
  const editingElement = useRef<HTMLDivElement | null>(null);

  function editHeading(event: React.FocusEvent<HTMLDivElement>) {
    editingElement.current &&
      editingElement.current.setAttribute("contenteditable", "true");
    setSelected(true);
  }

  function finishEditing(event: React.FocusEvent<HTMLDivElement>) {
    editingElement.current &&
      editingElement.current.setAttribute("contenteditable", "false");
    setSelected(false);
    if (event.target.innerText === "") {
      removeElement(item.id);
    } else {
      changeElementValue(item.id, event.target.innerText);
    }
  }

  function changeHeadingText(event: any) {}

  function remove() {
    removeElement(item.id);
  }

  function checkMouseDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.code === "Enter") {
      event.preventDefault();
      editingElement.current && editingElement.current.blur();
    }
  }

  return (
    <Container>
      <StyledParagraph
        selected={selected}
        onKeyDown={checkMouseDown}
        ref={editingElement}
        onInput={changeHeadingText}
        onBlur={finishEditing}
        onFocus={editHeading}
        tabIndex={-1}
        data-id={item.id}
      >
        {item.value}
      </StyledParagraph>
      {selected && <StyledButton onMouseDown={remove}>X</StyledButton>}
    </Container>
  );
}

Paragraph.displayName = "Paragraph";

export default Paragraph;
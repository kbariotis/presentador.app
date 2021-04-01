import styled from "styled-components";

import { Builder } from "../types";
import { colours } from "../theme";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftContainer = styled.div`
  padding: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colours.primary};
  color: white;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    flex: 1;
  }

  .paragraphs {
    flex: 2;

    p {
    }
  }
`;
const RightContainer = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.5em;
`;

const ImageContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export function HeaderManyParagraphsImageRenderer({
  children,
}: {
  children: JSX.Element[];
}) {
  const header = children.find((item) => item.type.displayName === "Header");
  const image = children.find((item) => item.type.displayName === "Image");
  const paragraphs = children.filter(
    (item) => item.type.displayName === "Paragraph"
  );

  if (!header) {
    return <></>;
  }

  return (
    <Container>
      <LeftContainer>
        {header}
        <div className="paragraphs">{paragraphs}</div>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>{image}</ImageContainer>
      </RightContainer>
    </Container>
  );
}

export const HeaderManyParagraphsImageBuilder: Builder = {
  add: (type) => {
    if (type === "paragraph") return "headerManyParagraphs";
    if (type === "image") return "headerManyParagraphsImage";
    return "normal";
  },
  remove: (type) => {
    return "normal";
  },
};
import html2canvas from "html2canvas";
import styled from "styled-components";
import { useCallback, useContext, useEffect, forwardRef } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { SlidesContext } from "../context/slides";
import { DeckContext } from "../context/deck";
import { ThumbnailsContext } from "../context/thumbnails";
import Thumbnail from "./Thumbnail";

const Container = styled.div`
  overflow-y: scroll;
  white-space: nowrap;
`;

function Controls(_: any, ref: any) {
  const { slides, setSlides } = useContext(SlidesContext);
  const { currentSlide, setCurrentSlide, setLoading } = useContext(DeckContext);
  const { thumbnails, setThumbnails } = useContext(ThumbnailsContext);

  const update = useCallback(async () => {
    if (ref.current) {
      const canvas = await html2canvas(ref.current);
      setThumbnails((currentThumbnails) =>
        currentThumbnails.map((item, index) =>
          index === currentSlide ? canvas.toDataURL() : item
        )
      );
    }
  }, [setThumbnails, currentSlide, ref]);

  // Update on elements change
  useEffect(() => {
    update();
  }, [slides, update]);

  // Update when a slide is added
  useEffect(() => {
    if (thumbnails[currentSlide] === "") {
      update();
    }
  }, [thumbnails, currentSlide, update]);

  function reorder(array: any[], source: number, destination: number) {
    const beforeSource = array.slice(0, source);
    const sourceItem = array.slice(source, source + 1);
    const afterSource = array.slice(source + 1);
    const arrayWithoutSource = [...beforeSource, ...afterSource];

    const first = arrayWithoutSource.slice(0, destination);
    const rest = arrayWithoutSource.slice(destination);

    return [...first, ...sourceItem, ...rest];
  }

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return;
        setLoading(true);
        const source = result.source.index;
        const destination = result.destination.index;
        setImmediate(() => {
          setSlides(reorder(slides, source, destination));
          setThumbnails(reorder(thumbnails, source, destination));
          setCurrentSlide(destination);
          setLoading(false);
        });
      }}
    >
      <Droppable droppableId="thumbnails" direction="horizontal">
        {(provided: any) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {thumbnails.map((item, index) => (
              <Thumbnail
                key={index}
                src={item}
                number={index}
                active={currentSlide === index}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default forwardRef<HTMLDivElement>(Controls);

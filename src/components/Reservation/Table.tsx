//held temporary. So far not used anywhere

import React, { useCallback, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import Element from "./Element";
import { range, inRange } from "lodash";

const HEIGHT = 90;

const Table: React.FC<CSSProperties> = () => {
  const desks = range(5);
  const [state, setState] = useState({
    order: desks,
    dragOrder: desks,
    draggerIndex: null,
  });

  const handleDrag = useCallback(
    ({ translation, id }) => {
      const delta = Math.round(translation.y / HEIGHT);
      const index = state.order.indexOf(id);
      const dragOrder = state.order.order.filter((index: any) => index !== id);

      if (!inRange(index + delta, 0, desks.lenght)) {
        return;
      }

      dragOrder.splice(index + delta, 0, id);

      setState((state) => ({
        ...state,
        draggedIndex: id,
        dragOrder,
      }));
    },
    [state.order, desks.lenght]
  );

  const handleDragEnd = useCallback(() => {
    setState((state) => ({
      ...state,
      order: state.dragOrder,
      draggerIndex: null,
    }));
  }, []);

  return (
    <div>
      <TableField>
        {desks.map((index: any) => {
          const isDragging = state.draggerIndex === index;
          const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);
          const top: any = state.dragOrder.indexOf(index) * (HEIGHT + 10);

          return (
            <Element
              key={index}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              id={index}
            >
              <Box style={top}>{index}</Box>
            </Element>
          );
        })}
      </TableField>
    </div>
  );
};

export default Table;

const TableField = styled.div`
  width: 90vw;
  height: 300px;
  border: 1px solid blue;
`;

const Box = styled.div.attrs((props: any) => ({
  style: {
    top: `${props.top}px`,
    transition: props.isDragging ? "none" : "all 500ms",
  },
}))`
  width: 300px,
  heigth: ${HEIGHT},
  background-color: red,
  display: flex,
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15),
  position: absolute, 
`;

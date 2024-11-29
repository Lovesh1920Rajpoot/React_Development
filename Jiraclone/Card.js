import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";

function Card({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <MuiCard
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            padding: "8px",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
          }}
        >
          <CardContent>
            <Typography variant="subtitle1">{task.title}</Typography>
          </CardContent>
        </MuiCard>
      )}
    </Draggable>
  );
}

export default Card;

import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { Box, Typography, Button } from "@mui/material";

function Column({ column, tasks }) {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#f4f5f7",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {column.title} ({tasks.length})
      </Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              minHeight: 200,
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <Button variant="outlined" fullWidth sx={{ marginTop: "8px" }}>
        + New
      </Button>
    </Box>
  );
}

export default Column;

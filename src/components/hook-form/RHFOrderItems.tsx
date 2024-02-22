import {
  FormControl,
  FormHelperText,
  FormLabel,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Controller, useFormContext } from "react-hook-form";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type Props = {
  name: string;
  fields: any[];
  label?: string;
  helperText?: React.ReactNode;
};

export default function RHFOrderItems({
  fields,
  name,
  label,
  helperText,
}: Props) {
  const { control, setValue } = useFormContext();
  const labelledby = label ? `${name}-${label}` : "";

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedFields = reorder(
      fields,
      result.source.index,
      result.destination.index
    );
    setValue(name, reorderedFields);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl component="fieldset">
          {label && (
            <FormLabel
              component="legend"
              id={labelledby}
              sx={{ typography: "body2" }}
            >
              {label}
            </FormLabel>
          )}
          <Stack
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <DragDropContext {...field} onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided: any, snapshot: any) => (
                  <Paper
                    variant="outlined"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      borderStyle: snapshot.isDraggingOver ? "dashed" : "solid",
                      maxWidth: "800px",
                      width: "100%",
                    }}
                  >
                    {(fields as any)?.map((item: any, index: number) => (
                      <Draggable
                        key={`item-${index}`}
                        draggableId={`item-${index}`}
                        index={index}
                      >
                        {(providedd: any, snapshott: any) => (
                          <Stack
                            ref={providedd.innerRef}
                            {...providedd.draggableProps}
                            {...providedd.dragHandleProps}
                            sx={{
                              p: 1,
                              mb: 1,
                              display: "flex",
                              flexDirection: "row",
                              gap: 1,
                              alignItems: "center",
                              border: "solid 1px #86939e",
                              borderRadius: 1,
                              userSelect: "none",
                              background: snapshott.isDragging
                                ? "#e6e9ec"
                                : "#f4f6f8",
                              ...providedd.draggableProps.style,
                            }}
                          >
                            <Stack sx={{ color: "#86939e" }}>
                              <Iconify icon="icon-park-outline:drag" />
                            </Stack>
                            {item}
                          </Stack>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Paper>
                )}
              </Droppable>
            </DragDropContext>
            <Tooltip title={helperText || label} placement="right-start">
              <Iconify
                icon="ri:information-line"
                width={23}
                sx={{ cursor: "help", color: "#9AA6B2" }}
              />
            </Tooltip>
          </Stack>
          {!!error && (
            <FormHelperText error={!!error}>{error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

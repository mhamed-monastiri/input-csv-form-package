import { Stack, TextField, TextFieldProps, Tooltip } from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  min?: number;
};

export default function RHFTextField({
  name,
  helperText,
  multiline,
  rows,
  type,
  inputRef,
  id,
  label,
  ...other
}: Props) {
  const { control, setValue } = useFormContext();
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            {...field}
            name={name}
            label={label}
            onBlur={field.onBlur}
            InputProps={{
              onWheel: handleWheel,
            }}
            fullWidth
            onWheel={handleWheel}
            value={field.value === null ? "" : field.value}
            inputRef={field.ref}
            multiline={multiline !== undefined && true}
            rows={rows}
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(e);
            }}
            error={!!error}
            helperText={error && error?.message}
            {...other}
            type={type}
          />
          <Tooltip title={helperText || label} placement="right-start">
            <Iconify
              icon="ri:information-line"
              width={23}
              sx={{
                cursor: "help",
                color: "#9AA6B2",
                marginTop: error ? "-24px" : "0px",
              }}
            />
          </Tooltip>
        </Stack>
      )}
    />
  );
}

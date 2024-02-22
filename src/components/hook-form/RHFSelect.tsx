import { Stack, TextField, TextFieldProps, Tooltip } from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type RHFSelectProps = TextFieldProps & {
  name: string;
  native?: boolean;
  multiple?: boolean;
  maxHeight?: boolean | number;
  children: React.ReactNode;
};

export function RHFSelect({
  name,
  label,
  native,
  maxHeight = 220,
  helperText,
  children,
  multiple,
  ...other
}: RHFSelectProps) {
  const { control, register } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack
          sx={
            helperText || label
              ? {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }
              : {}
          }
        >
          <TextField
            {...field}
            select
            fullWidth
            label={label}
            inputRef={field.ref}
            {...register(name)}
            SelectProps={{
              native,
              MenuProps: {
                PaperProps: {
                  sx: {
                    ...(!native && {
                      px: 1,
                      maxHeight:
                        typeof maxHeight === "number" ? maxHeight : "unset",
                      "& .MuiMenuItem-root": {
                        px: 1,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      },
                    }),
                  },
                },
              },
              sx: { textTransform: "capitalize" },
            }}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
          >
            {children}
          </TextField>
          {(helperText || label) && (
            <Tooltip
              title={helperText || label || field.value}
              placement="right-start"
            >
              <Iconify
                icon="ri:information-line"
                width={23}
                sx={{
                  cursor: "help",
                  color: "#9AA6B2",
                  marginTop: error ? "-24px" : "",
                }}
              />
            </Tooltip>
          )}
        </Stack>
      )}
    />
  );
}

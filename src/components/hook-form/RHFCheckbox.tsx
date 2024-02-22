import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  Stack,
  Tooltip
} from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

interface RHFCheckboxProps extends Omit<FormControlLabelProps, "control"> {
  name: string;
  helperText?: React.ReactNode;
}

export function RHFCheckbox({
  name,
  helperText,
  label,
  ...other
}: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <FormControlLabel
              label={label}
              control={<Checkbox {...field} checked={field.value} />}
              {...other}
            />
            <Tooltip title={helperText || label} placement="right-start">
              <Iconify
                icon="ri:information-line"
                width={23}
                sx={{ cursor: "help", color: "#9AA6B2" }}
              />
            </Tooltip>
          </Stack>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
}

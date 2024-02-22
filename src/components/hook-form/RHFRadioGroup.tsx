import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Stack,
  Tooltip,
} from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

type Props = RadioGroupProps & {
  name: string;
  options: { label: string; value: any }[];
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
};

export default function RHFRadioGroup({
  row,
  name,
  label,
  options,
  spacing,
  helperText,

  ...other
}: Props) {
  const { control } = useFormContext();
  const labelledby = label ? `${name}-${label}` : "";

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
              label
            </FormLabel>
          )}
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <RadioGroup
              {...field}
              aria-labelledby={labelledby}
              row={row}
              value={
                field.value !== undefined &&
                !Number.isNaN(field.value) &&
                field.value
              }
              onBlur={field.onBlur}
              {...other}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={
                    option.value !== undefined &&
                    !Number.isNaN(option.value) &&
                    option.value.toString()
                  }
                  value={
                    option.value !== undefined &&
                    !Number.isNaN(option.value) &&
                    option.value.toString()
                  }
                  control={<Radio />}
                  label={option.label}
                  sx={{
                    "&:not(:last-of-type)": {
                      mb: spacing || 0,
                    },
                    ...(row && {
                      mr: 0,
                      "&:not(:last-of-type)": {
                        mr: spacing || 2,
                      },
                    }),
                  }}
                />
              ))}
            </RadioGroup>

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

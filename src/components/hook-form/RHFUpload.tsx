import CancelIcon from "@mui/icons-material/Cancel";
import {
  FormHelperText,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { fData } from "../../utils/formatNumber";
import Iconify from "../iconify";
import { Upload, UploadAvatar, UploadBox, UploadProps } from "../upload";

// ----------------------------------------------------------------------

interface Props extends Omit<UploadProps, "file"> {
  name: string;
  label: string;
  multiple?: boolean;
}

// ----------------------------------------------------------------------

export function RHFUploadAvatar({ name, helperText, ...other }: Props) {
  const { control, setValue } = useFormContext();

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue(name, newFile, { shouldValidate: true });
      }
    },
    [setValue, name]
  );
  const handleRemoveFile = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <UploadAvatar
            ModelImage="Logo *"
            accept={{
              "image/*": [],
            }}
            error={!!error}
            file={field.value}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
            helperText={
              <Typography
                variant="caption"
                sx={{
                  mt: 2,
                  mx: "auto",
                  display: "block",
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <>
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br />
                    {`max size of `}
                    {fData(5000000)}
                    {field.value && (
                      <IconButton
                        onClick={handleRemoveFile}
                        color="error"
                        aria-label="delete"
                      >
                        <CancelIcon color="error" />
                      </IconButton>
                    )}
                  </>
                  <Tooltip title="Logo *" placement="right-start">
                    <Iconify
                      icon="ri:information-line"
                      width={23}
                      sx={{ cursor: "help", color: "#9AA6B2" }}
                    />
                  </Tooltip>
                </Stack>
              </Typography>
            }
            {...other}
          />
          {!!error && (
            <FormHelperText error sx={{ px: 2, textAlign: "center" }}>
              {error?.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
}

// ----------------------------------------------------------------------

export function RHFUploadBox({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <UploadBox files={field.value} error={!!error} {...other} />
      )}
    />
  );
}

// ----------------------------------------------------------------------

export function RHFUpload({
  name,
  multiple,
  helperText,
  files,
  label,
  ...other
}: Props) {
  const { control, setValue } = useFormContext();
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue(name, newFile, { shouldValidate: true });
      }
    },
    [setValue, name]
  );
  const handleRemoveFile = () => {
    setValue(name, "", { shouldValidate: true });
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        multiple ? (
          <Upload
            multiple
            accept={{ "image/*": [] }}
            files={field.value}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
            error={!!error}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            {...other}
          />
        ) : (
          <Upload
            accept={{ "image/*": [] }}
            thumbnail={field.value}
            file={field.value}
            error={!!error}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
            helperText={
              (!!error || helperText) && (
                <FormHelperText error={!!error} sx={{ px: 2 }}>
                  {error ? error?.message : helperText}
                </FormHelperText>
              )
            }
            {...other}
          />
        )
      }
    />
  );
}

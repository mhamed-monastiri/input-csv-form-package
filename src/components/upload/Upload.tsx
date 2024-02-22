import {
  Box,
  Button,
  IconButton,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { useDropzone } from "react-dropzone";
import { UploadIllustration } from "../../assets/illustrations";
import Iconify from "../iconify";
import RejectionFiles from "./errors/RejectionFiles";
import MultiFilePreview from "./preview/MultiFilePreview";
import SingleFilePreview from "./preview/SingleFilePreview";
import { UploadProps } from "./types";

// ----------------------------------------------------------------------

const StyledDropZone = styled("div")(({ theme }) => ({
  outline: "none",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: "#F4F6F8",
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  "&:hover": {
    opacity: 0.72,
  },
}));

// ----------------------------------------------------------------------

export default function Upload({
  disabled,
  multiple = false,
  hideInput = false,
  previewFileAsFiles,
  error,
  helperText,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,

  onRemove,
  onRemoveAll,
  sx,
  ...other
}: UploadProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple,
    disabled,
    ...other,
  });

  const hasFile = !!file && !multiple;
  const hasFiles = files && multiple && files?.length > 0;
  const isError = isDragReject || !!error;

  return (
    <Box sx={{ width: 1, position: "relative", ...sx }}>
      {!hideInput && (
        <StyledDropZone
          {...getRootProps()}
          sx={{
            ...(isDragActive && {
              opacity: 0.72,
            }),
            ...(isError && {
              color: "error.main",
              bgcolor: "error.lighter",
              borderColor: "error.light",
            }),
            ...(disabled && {
              opacity: 0.48,
              pointerEvents: "none",
            }),
            ...(hasFile && {
              padding: "12% 0",
            }),
          }}
        >
          <input {...getInputProps()} />
          <Placeholder
            sx={{
              ...(hasFile && {
                opacity: 0,
              }),
            }}
          />
          {hasFile && <SingleFilePreview file={file} />}
        </StyledDropZone>
      )}
      {helperText && helperText}
      <RejectionFiles fileRejections={fileRejections} />
      {hasFile && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            top: 16,
            right: 16,
            zIndex: 9,
            position: "absolute",
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}
      {(hasFiles || previewFileAsFiles) && (
        <>
          <Box sx={{ my: 3 }}>
            <MultiFilePreview
              files={files}
              thumbnail={thumbnail}
              onRemove={onRemove}
            />
          </Box>
          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
            {onRemoveAll && (
              <Button
                color="inherit"
                variant="outlined"
                size="small"
                onClick={onRemoveAll}
              >
                Remove all
              </Button>
            )}
            {onUpload && !previewFileAsFiles && (
              <Button size="small" variant="contained" onClick={onUpload}>
                Upload files
              </Button>
            )}
          </Stack>
        </>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function Placeholder({ sx, ...other }: StackProps) {
  return (
    <Stack
      spacing={5}
      alignItems="center"
      justifyContent="center"
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        width: 1,
        textAlign: {
          xs: "center",
          md: "left",
        },
        ...sx,
      }}
      {...other}
    >
      <UploadIllustration sx={{ maxWidth: 220 }} />
      <div>
        <Typography gutterBottom variant="h5">
          Drop or Select file
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Drop files here or click
          <Typography
            variant="body2"
            component="span"
            sx={{
              mx: 0.5,
              color: "primary.main",
              textDecoration: "underline",
            }}
          >
            browse
          </Typography>
          thorough your machine
        </Typography>
      </div>
    </Stack>
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import * as React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { DialogWithCloseButton } from "./components/customized-dialogs";
import {
  RHFCheckbox,
  RHFOrderItems,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "./components/hook-form";
import FormProvider from "./components/hook-form/FormProvider";
import Iconify from "./components/iconify";
import { Upload } from "./components/upload";
import { downloadExcelFile } from "./utils/exportDataInCSVFile";

// ----------------------------------------------------------------------

export interface FormValues {
  file: File | '';
  delimiterType?: string;
  delimiter: string;
  qualifierType?: string;
  qualifier: string;
  dateFormat?: string;
  withHeader: boolean;
  creditDebitOneColumn?: string;
  columnsOrder?: { label: string; value: string }[];
}
export interface SendedFormValues {
  file: File | '';
  delimiter: string;
  qualifier: string;
  dateFormat?: string;
  withHeader: boolean;
  creditDebitOneColumn?: boolean;
  columnsOrder?: string[];
}

interface Props {
  open: boolean;
  existDate?: boolean;
  existAmount?: boolean;
  existOrderFields?: boolean;
  onClose: VoidFunction;
  onSubmit: (data: SendedFormValues) => void;
  delimiters?: { label: string; value: string }[];
  qualifiers?: { label: string; value: string }[];
  datesFormats?: string[];
  fieldsToBeOrder?: { label: string; value: string }[];
  firstAmountColumn?: string;
  secondAmountColumn?: string;
  exampleFile?: (string | number | undefined)[][];
}

// ----------------------------------------------------------------------

export default function ImportCsvDialog({
  open,
  existDate = true,
  existAmount = true,
  existOrderFields = true,
  firstAmountColumn = "Credit",
  secondAmountColumn = "Debit",
  onClose,
  onSubmit,
  fieldsToBeOrder = [],
  delimiters = [
    { label: "Comma", value: "," },
    { label: "Semicolon", value: ";" },
    { label: "Pipe", value: "|" },
    { label: "Colon", value: ":" },
    { label: "Space", value: " " },
    { label: "Period", value: "." },
    { label: "Hyphen", value: "-" },
    { label: "Underscore", value: "_" },
    { label: "Slash", value: "/" },
  ],
  qualifiers = [
    { label: "Double Quote", value: '"' },
    { label: "Single Quote", value: "'" },
    { label: "Backtick", value: "`" },
  ],
  datesFormats = [
    "YYYY-MM-DD",
    "DD/MM/YYYY",
    "MM/DD/YYYY",
    "MMMM DD, YYYY",
    "DD MMMM, YYYY",
    "YYYY-MM-DD HH:mm:ss",
    "DD/MM/YYYY HH:mm:ss",
    "MM/DD/YYYY HH:mm:ss",
    "YYYY-MM-DDTHH:mm:ssZ",
    "dddd, MMMM DD, YYYY",
  ],
  exampleFile = [
    [
      "first_column",
      "second_column",
      "third_column",
      "fourth_column",
      "fifth_column",
    ],
    [
      dayjs().format("DD-MM-YYYY"),
      dayjs().format("DD-MM-YYYY"),
      120,
      undefined,
      "text",
    ],
    [
      dayjs().format("DD-MM-YYYY"),
      dayjs().format("DD-MM-YYYY"),
      undefined,
      500,
      "text",
    ],
    [
      dayjs().format("DD-MM-YYYY"),
      dayjs().format("DD-MM-YYYY"),
      790,
      undefined,
      "text",
    ],
  ],
  ...other
}: Props) {
  const [files, setFiles] = useState<Array<string | File>>([]);

  const AMOUNT_FIELDS_FORMAT = [
    {
      label: `Two Columns (${firstAmountColumn}/${secondAmountColumn})`,
      value: "true",
    },
    {
      label: "Single Column (+/-)",
      value: "false",
    },
  ];

  const uploadEntriesSchema = Yup.object().shape({
    file: Yup.mixed().required("File is required"),
    delimiterType: Yup.string().required("Delimiter is required"),
    delimiter: Yup.string().when("delimiterType", ([delimiterType]) =>
      delimiterType === "OTHER"
        ? Yup.string().required("Other delimiter is required")
        : Yup.string()
    ),
    qualifierType: Yup.string().required("Qualifier is required"),
    qualifier: Yup.string().when("qualifierType", ([qualifierType]) =>
      qualifierType === "OTHER"
        ? Yup.string()
            .required("Other delimiter is required")
            .notOneOf(
              [Yup.ref("delimiter")],
              "Delimiter and qualifier must be different"
            )
        : Yup.string()
    ),
    dateFormat: Yup.string().when(() =>
      existDate
        ? Yup.string().required("Date format is required")
        : Yup.string()
    ),
    withHeader: Yup.boolean().required("With header is required"),
    creditDebitOneColumn: Yup.string().when(() =>
      existAmount
        ? Yup.string().required(
            `${firstAmountColumn}/${secondAmountColumn} columns format is required`
          )
        : Yup.string()
    ),
    columnsOrder: Yup.array()
      .of(Yup.string())
      .when(() =>
        existOrderFields
          ? Yup.array().of(Yup.string()).required("Columns order is required")
          : Yup.array().of(Yup.string())
      ),
  });

  const defaultValues = useMemo(
    () => ({
      file: "" as File | "",
      delimiterType: "",
      delimiter: "",
      qualifierType: "",
      qualifier: "",
      dateFormat: "",
      withHeader: true,
      creditDebitOneColumn: "true",
      columnsOrder: fieldsToBeOrder,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm<FormValues>({
    resolver: yupResolver(uploadEntriesSchema) as any,
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = methods;
  const values = watch();

  useEffect(() => {
    if (!open) {
      setFiles([]);
      reset();
    }
  }, [open, reset]);

  useEffect(() => {
    const isCreditDebitOneColumn = values?.creditDebitOneColumn?.toString() === 'true';
    let addedFields: { label: string; value: string }[] = [];
    if (existAmount) {
      addedFields = isCreditDebitOneColumn
        ? [
            { label: `${firstAmountColumn}`, value: 'credit' },
            { label: `${secondAmountColumn}`, value: 'debit' },
          ]
        : [
            {
              label: `${firstAmountColumn}/${secondAmountColumn}`,
              value: 'creditDebit',
            },
          ];
    }
    const selectedFieldsOrder = [...fieldsToBeOrder, ...addedFields];
    setValue('columnsOrder', selectedFieldsOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.creditDebitOneColumn]);

  useEffect(() => {
    if (values.delimiterType && values.delimiterType !== "OTHER") {
      setValue("delimiter", values.delimiterType);
    } else setValue("delimiter", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.delimiterType, setValue]);

  useEffect(() => {
    if (values.qualifierType && values.qualifierType !== "OTHER") {
      setValue("qualifier", values.qualifierType);
    } else setValue("qualifier", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.qualifierType, setValue]);

  const handleDropSingleFile = useCallback(
    (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      if (newFile) {
        if (newFile) {
          setFiles([
            Object.assign(newFile, {
              preview: URL.createObjectURL(newFile),
            }),
          ]);
        }
        setValue(
          "file",
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          }) as any
        );
      }
    },
    [setValue]
  );

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleImport = async (data: FormValues) => {
    delete data.delimiterType;
    delete data.qualifierType;
    const customizedData: SendedFormValues = {
      ...data,
      creditDebitOneColumn: Boolean(data.creditDebitOneColumn),
      columnsOrder: data?.columnsOrder?.map((field) => field?.value),
    };
    if (!existDate) delete customizedData.dateFormat;
    if (!existAmount) delete customizedData.creditDebitOneColumn;
    if (!existOrderFields) delete customizedData.columnsOrder;
    onSubmit(customizedData);
  };

  const handleRemoveFile = (inputFile: File | string) => {
    const filtered = files.filter((file) => file !== inputFile);
    setFiles(filtered);
    setValue("file", filtered[0] as File | "");
  };

  return (
    <DialogWithCloseButton
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      {...other}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(handleImport)}>
        <DialogTitle sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
          Import CSV
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 1, pb: 0, border: "none" }}>
          <Box
            gap={2}
            display="grid"
            gridTemplateColumns={{ xs: "repeat(1, 1fr)" }}
          >
            <Upload
              accept={{ "file/csv": [".csv"] }}
              multiple
              onDrop={handleDropSingleFile}
              files={files}
              onRemove={handleRemoveFile}
              hideInput={files.length !== 0}
            />
            <Divider />
            {values?.file && (
              <>
                <Box
                  gap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs:
                      values.delimiterType === "OTHER"
                        ? "repeat(2, 1fr)"
                        : "repeat(1, 1fr)",
                  }}
                >
                  <RHFSelect
                    name="delimiterType"
                    label="Delimiter *"
                    placeholder="Delimiter"
                  >
                    <MenuItem
                      value=""
                      sx={{ fontStyle: "italic", color: "text.secondary" }}
                    >
                      None
                    </MenuItem>
                    <Divider />
                    {[...delimiters, { label: "Other", value: "OTHER" }]?.map(
                      (delimiter, index) => (
                        <MenuItem
                          key={index}
                          value={delimiter.value}
                          sx={{
                            pl: 3,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>{`${delimiter?.label} `}</span>
                          {delimiter?.value !== "OTHER" && (
                            <span>( {delimiter?.value} )</span>
                          )}
                        </MenuItem>
                      )
                    )}
                  </RHFSelect>
                  {values.delimiterType === "OTHER" && (
                    <RHFTextField name="delimiter" label="Other *" />
                  )}
                </Box>
                <Box
                  gap={2}
                  display="grid"
                  gridTemplateColumns={{
                    xs:
                      values.qualifierType === "OTHER"
                        ? "repeat(2, 1fr)"
                        : "repeat(1, 1fr)",
                  }}
                >
                  <RHFSelect
                    name="qualifierType"
                    label={`Qualifier *`}
                    placeholder="Qualifier"
                  >
                    <MenuItem
                      value=""
                      sx={{ fontStyle: "italic", color: "text.secondary" }}
                    >
                      None
                    </MenuItem>
                    <Divider />
                    {[...qualifiers, { label: "Other", value: "OTHER" }]?.map(
                      (qualifier, index) => (
                        <MenuItem
                          key={index}
                          value={qualifier.value}
                          sx={{
                            pl: 3,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>{`${qualifier?.label} `}</span>
                          {qualifier?.value !== "OTHER" && (
                            <span> {qualifier?.value} </span>
                          )}
                        </MenuItem>
                      )
                    )}
                  </RHFSelect>
                  {values.qualifierType === "OTHER" && (
                    <RHFTextField name="qualifier" label={`Other *`} />
                  )}
                </Box>
                {existDate && (
                  <RHFSelect
                    name="dateFormat"
                    label="Date Format *"
                    placeholder="Date Format"
                  >
                    <MenuItem
                      value=""
                      sx={{ fontStyle: "italic", color: "text.secondary" }}
                    >
                      None
                    </MenuItem>
                    <Divider />
                    {datesFormats?.map((dateFormat, index) => (
                      <MenuItem key={index} value={dateFormat}>
                        {dateFormat}
                      </MenuItem>
                    ))}
                  </RHFSelect>
                )}
                {existAmount && (
                  <RHFRadioGroup
                    row
                    name="creditDebitOneColumn"
                    options={AMOUNT_FIELDS_FORMAT}
                    label="Credit/Debit Columns Format *"
                  />
                )}
                {existOrderFields && (
                  <RHFOrderItems
                    fields={values?.columnsOrder ?? []}
                    name="columnsOrder"
                    label="Fields Order *"
                  />
                )}
                <RHFCheckbox name="withHeader" label="File With Header *" />
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" gap={{ xs: 1 }}>
            <Button
              variant="outlined"
              startIcon={<Iconify icon="eva:download-fill" />}
              onClick={() => downloadExcelFile(exampleFile)}
            >
              Download an example
            </Button>
            <LoadingButton
              type="submit"
              startIcon={<Iconify icon="eva:cloud-upload-fill" />}
              variant="contained"
              disabled={files?.length === 0}
              loading={isSubmitting}
            >
              Import
            </LoadingButton>
          </Stack>
        </DialogActions>
      </FormProvider>
    </DialogWithCloseButton>
  );
}

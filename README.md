# Import CSV Form

## GitHub Repository

Find the Import CSV Form repository on [GitHub](https://github.com/mhamed-monastiri/input-csv-form-package).

## Overview

The Import CSV Form component simplifies the process of importing CSV files into your web application. It provides an easy-to-use interface for uploading CSV files and customizing their handling, including options for delimiters, qualifiers, and date formats.

## Output

After submitting the form, the Import CSV Form component allows your frontend to send the data to your backend server. The backend can then manage the uploaded CSV file, along with specified parameters like delimiters and date formats. This facilitates smooth processing of CSV data, such as insertion into a database or other necessary manipulations on the server side.

## Installation

To install the package, use npm:

```bash
npm install import-csv-form
```

## Usage

Here's an example of how to use the ImportCsvDialog component in your React application:

```jsx
import ImportCsvDialog from "import-csv-form";
import { useState } from "react";

function YourComponent() {
  const [openUploadFile, setOpenUploadFile] = useState(false);

  const handleCloseDialog = () => {
    setOpenUploadFile(false);
  };

  const handleImport = (data) => {
    // Your logic to send data to the backend
    // Example: Send data using fetch or axios
    fetch("your-backend-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle response from the server
      })
      .catch((error) => {
        // Handle errors
      });
  };

  return (
    <div>
      <button onClick={() => setOpenUploadFile(true)}>
        Open Upload File Dialog
      </button>
      {/* here the implementation */}
      <ImportCsvDialog
        open={openUploadFile}
        onSubmit={handleImport}
        onClose={handleCloseDialog}
        fieldsToBeOrder={["Operation Date", "Value Date", "Description"]}
      />
    </div>
  );
}
```

## Props

| Name               | Default Value                              | Type     | Description                                                                             |
| ------------------ | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------- |
| open               | -                                          | boolean  | Determines whether the dialog is open or closed.                                        |
| existDate          | true                                       | boolean  | Indicates whether date-related fields will be displayed.                                |
| existAmount        | true                                       | boolean  | Indicates whether amount-related fields will be displayed.                              |
| existOrderFields   | true                                       | boolean  | Indicates whether fields order-related options will be displayed.                       |
| firstAmountColumn  | 'Credit'                                   | string   | The label for the first amount column.                                                  |
| secondAmountColumn | 'Debit'                                    | string   | The label for the second amount column.                                                 |
| onClose            | -                                          | function | Callback function to handle the closing of the dialog.                                  |
| onSubmit           | -                                          | function | Callback function to handle the submission of form data.                                |
| fieldsToBeOrder    | []                                         | string[] | An array of field labels specifying the order of fields.                                |
| delimiters         | [See example below](#default-delimiters)   | object[] | An array of objects representing delimiter options with 'label' and 'value' properties. |
| qualifiers         | [See example below](#default-qualifiers)   | object[] | An array of objects representing qualifier options with 'label' and 'value' properties. |
| datesFormats       | [See example below](#default-date-formats) | string[] | An array of string representing date format options.                                    |
| exampleFile        | [See example below](#default-example-file) | any[][]  | A 2-dimensional array representing an example CSV file structure with data and headers. |

### Default Delimiters

```ts
[
  { label: "Comma", value: "," },
  { label: "Semicolon", value: ";" },
  { label: "Pipe", value: "|" },
  { label: "Colon", value: ":" },
  { label: "Space", value: " " },
  { label: "Period", value: "." },
  { label: "Hyphen", value: "-" },
  { label: "Underscore", value: "_" },
  { label: "Slash", value: "/" },
];
```

### Default Qualifiers

```ts
[
  { label: "Double Quote", value: '"' },
  { label: "Single Quote", value: "'" },
  { label: "Backtick", value: "`" },
];
```

### Default Date Formats

```ts
[
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
];
```

### Default Example File

```ts
[
  [
    "first_column",
    "second_column",
    "third_column",
    "fourth_column",
    "fifth_column",
  ],
  ["DD-MM-YYYY", "DD-MM-YYYY", 120, undefined, "text"],
  ["DD-MM-YYYY", "DD-MM-YYYY", undefined, 500, "text"],
  ["DD-MM-YYYY", "DD-MM-YYYY", 790, undefined, "text"],
];
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

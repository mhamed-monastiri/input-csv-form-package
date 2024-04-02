import * as React from 'react';
export interface FormValues {
    file: File | '';
    delimiterType?: string;
    delimiter: string;
    qualifierType?: string;
    qualifier: string;
    dateFormat?: string;
    withHeader: boolean;
    creditDebitOneColumn?: string;
    columnsOrder?: {
        label: string;
        value: string;
    }[];
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
    delimiters?: {
        label: string;
        value: string;
    }[];
    qualifiers?: {
        label: string;
        value: string;
    }[];
    datesFormats?: string[];
    fieldsToBeOrder?: {
        label: string;
        value: string;
    }[];
    firstAmountColumn?: string;
    secondAmountColumn?: string;
    exampleFile?: (string | number | undefined)[][];
}
export default function ImportCsvDialog({ open, existDate, existAmount, existOrderFields, firstAmountColumn, secondAmountColumn, onClose, onSubmit, fieldsToBeOrder, delimiters, qualifiers, datesFormats, exampleFile, ...other }: Props): React.JSX.Element;
export {};

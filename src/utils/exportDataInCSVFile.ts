import dayjs from "dayjs";

export function DataAsCSVFile(data: string) {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  const fileName = `downloaded Report ${dayjs(new Date()).format(
    "DD MMM YY"
  )}.csv`;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export const downloadExcelFile = (
  data: Array<Array<string | number | undefined | null>>
) => {
  const csvContent = data.map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "example.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

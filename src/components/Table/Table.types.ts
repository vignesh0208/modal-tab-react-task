export type Column = {
  header: string;
  accessor: string;
};

export type TableProps<T> = {
  data: T[];
  columns: Column[];
};

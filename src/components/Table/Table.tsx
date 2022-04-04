import React, { CSSProperties } from "react";
import styles from "./Table.module.css";

type Column = {
  title: string | number | JSX.Element;
  name: string;
  style?: CSSProperties;
};

type Row = Record<string, string | number | JSX.Element>;

interface TableProps {
  columns: Column[];
  data: Row[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name} className={styles.th} style={column.style}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, key) => (
          <tr key={key}>
            {columns.map((column) => (
              <td key={column.name} className={styles.td}>
                {row[column.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);

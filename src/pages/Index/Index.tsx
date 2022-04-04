import React, { useState } from "react";
import Table from "components/Table/Table";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import useFreeSound from "utils/useFreeSound";
import columns from "./columns.json";
import styles from "./Index.module.css";

const Index: React.FC = () => {
  const [query, setQuery] = useState("");
  const { listOfSounds, loading, errorRequest, onSearch } = useFreeSound({
    query
  });

  return (
    <div>
      <div className={styles.header}>
        <Input
          value={query}
          onChange={setQuery}
          onEnter={onSearch}
          endAdornment={<Button onClick={onSearch}>SEARCH</Button>}
        />
      </div>
      {errorRequest && (
        <div className={styles.errorMessage}>{errorRequest}</div>
      )}
      {loading && <Loader />}
      <Table columns={columns} data={listOfSounds} />
    </div>
  );
};

export default Index;

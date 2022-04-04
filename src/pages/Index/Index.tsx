import React, { useState } from "react";
import Table from "components/Table/Table";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import useFreeSound from "utils/useFreeSound";

const Index: React.FC = () => {
  const [query, setQuery] = useState("");
  const { listOfSounds, errorRequest, onSearch } = useFreeSound({ query });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20
        }}
      >
        <Input
          value={query}
          onChange={setQuery}
          onEnter={onSearch}
          endAdornment={<Button onClick={onSearch}>SEARCH</Button>}
        />
      </div>
      <Table
        columns={[
          {
            title: "ID",
            name: "id",
            style: {
              width: "10%"
            }
          },
          {
            title: "Name of song",
            name: "name",
            style: {
              width: "30%"
            }
          },
          {
            title: "Player",
            name: "player"
          }
        ]}
        data={listOfSounds}
      />
    </div>
  );
};

export default Index;

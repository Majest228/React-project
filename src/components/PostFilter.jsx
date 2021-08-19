import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Выбрать"
        options={[
          {
            value: "title",
            name: "По названию ",
          },
          {
            value: "body",
            name: "По содержанию",
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;

import * as React from "react";
import { ImdbWrapper } from "./detail.styles";
import AttributeView from "./attributeView";
import { info } from "../../types";

const ImdbView: React.FunctionComponent<info> = ({ values }: any) => {
  return (
    <ImdbWrapper>
      {Object.keys(values).map(
        (key: string) =>
          key !== "__typename" && key !== "plot" && (
            <AttributeView
              title={key}
              value={values[key]}
              direction={key === "plot" ? "column" : "row"}
              key={key}
            />
          )
      )}
    </ImdbWrapper>
  );
};

export default ImdbView;

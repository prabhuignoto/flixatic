import * as React from "react";
import { ITab } from "../../types";
import { TabWrapper, TabHeads, TabHead } from "./tabs-styles";
import Head from "./tabHead";
import Body from "./tabBody";

const Tab: React.FunctionComponent<{
  items: Array<{
    name: string;
    renderView: () => any;
    selected?: boolean;
  }>;
}> = ({ items }) => {
  const [renderView, setRenderView] = React.useState(items[0].renderView);
  const [tabs, setTabs] = React.useState(
    items.map((x, index) =>
      Object.assign({}, x, {
        selected: index === 0 ? true : false
      })
    )
  );

  const handleClick = (title: string) => {
    const view = tabs.find(x => x.name === title).renderView;
    if (view) {
      setRenderView(view);
      setTabs(
        tabs.map(tab => {
          let selected = false;
          if (tab.name === title) {
            selected = true;
          }
          return Object.assign({}, tab, {
            selected
          });
        })
      );
    }
  };

  return (
    <TabWrapper>
      <TabHeads>
        {tabs.map(x => (
          <Head
            title={x.name}
            handleClick={handleClick}
            selected={x.selected}
          />
        ))}
      </TabHeads>
      <Body view={renderView} />
    </TabWrapper>
  );
};

export default Tab;

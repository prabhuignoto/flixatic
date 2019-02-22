import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CheckboxGroup from "../components/checkbox-group";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { UpdateGenreSelection } from "../action-creators";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateGenreSelection: (selected: string[]) => {
    dispatch(UpdateGenreSelection(selected))
  }
});

interface IProps {
  updateGenreSelection?: (selected: string[]) => void;
}

const GenreContainer: React.FunctionComponent<IProps> = ({
  updateGenreSelection
}) => (
  <Query
    query={gql`
      {
        getAllGenres {
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <span>Loading</span>;
      }

      if (!loading && data) {
        return (
          <CheckboxGroup
            items={data.getAllGenres.map((x: any) =>
              Object.assign(x, {
                value: x.name
              })
            )}
            label="Choose Genre"
            handleSelections={updateGenreSelection}
          />
        );
      }

      if (error) {
        return <span>Failed</span>;
      }
    }}
  </Query>
);

export default connect<{}, IProps, IProps>(
  null,
  mapDispatchToProps
)(GenreContainer);

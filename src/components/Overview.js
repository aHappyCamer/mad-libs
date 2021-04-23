import React from "react";

const Overview = (props) => {
  // const { task } = props;

  return(
    DownloadLink
  );
}

class DownloadLink extends React.Component {
  render() {
      return (
          <form method="get" action={this.props.src}>
              <button type="submit">{this.props.children}</button>
          </form>
      )
  }
}

export default Overview;
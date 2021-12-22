import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "./Paginator.scss";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

type props = {
  onChangePage: Function;
  selectedPageIsLastOne: boolean;
};

type state = {
  selectedPage: number;
};

library.add(faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft);

export class Paginator extends React.Component<props, state> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedPage: 1,
    };
  }

  onChangePage(pageNumber: number) {
    this.setState({
      selectedPage: pageNumber,
    });

    this.props.onChangePage(pageNumber);
  }

  render() {
    let pages = [];

    let firstSelectedPageOnLayout;

    if (this.props.selectedPageIsLastOne) {
      firstSelectedPageOnLayout = this.state.selectedPage - 4;
    } else {
      firstSelectedPageOnLayout =
        this.state.selectedPage < 3 ? 1 : this.state.selectedPage - 2;
    }

    for (
      let i = firstSelectedPageOnLayout;
      i < firstSelectedPageOnLayout + 5;
      i++
    ) {
      pages.push(
        <div
          className={
            "c-page-selector " +
            (i === this.state.selectedPage ? "c-page-selector--selected" : "")
          }
          key={i}
          onClick={() => this.onChangePage(i)}
        >
          {i}
        </div>
      );
    }

    return (
      <div className="c-pagination-container">
        {this.state.selectedPage > 5 && (
          <FontAwesomeIcon
            className="c-first-page"
            icon="angle-double-left"
            onClick={() => this.onChangePage(this.state.selectedPage - 5)}
          />
        )}

        {this.state.selectedPage > 1 && (
          <FontAwesomeIcon
            className="c-previous-page"
            icon="angle-left"
            onClick={() => this.onChangePage(this.state.selectedPage - 1)}
          />
        )}

        {pages}

        {!this.props.selectedPageIsLastOne && (
          <FontAwesomeIcon
            className="c-next-page"
            icon="angle-right"
            onClick={() => this.onChangePage(this.state.selectedPage + 1)}
          />
        )}

        {!this.props.selectedPageIsLastOne && (
          <FontAwesomeIcon
            className="c-last-page"
            icon="angle-double-right"
            onClick={() => this.onChangePage(this.state.selectedPage + 5)}
          />
        )}
      </div>
    );
  }
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import "./Paginator.scss";
import {
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

type props = {
  selectedPage: number;
  onChangePage: Function;
};

type state = {
  selectedPage: number;
};

library.add(faAngleRight, faAngleDoubleRight);

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

    for (
      let i = this.props.selectedPage;
      i < this.props.selectedPage + 5;
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
        {pages} <FontAwesomeIcon className="c-next-page" icon="angle-right" />
        <FontAwesomeIcon className="c-last-page" icon="angle-double-right" />
      </div>
    );
  }
}

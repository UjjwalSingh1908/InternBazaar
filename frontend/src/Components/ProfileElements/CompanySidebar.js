import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./ProfileElements.css";
import lists from "../../assets/list.svg";
import group from "../../assets/group.svg";
import checklists from "../../assets/checklists.svg";
import post from "../../assets/post.svg";

class CompanySidebar extends Component {
  render() {
    return (
      <Card className={classes.card}>
        <Card.Body>
          <Link to="#">
            <div className={classes.link}>
              <img src={group} className={classes.icon} alt="" />
              <span class={classes.heading}>ORGANIZATION DEAILS</span>
            </div>
          </Link>
          <Link to="#">
            <div className={classes.link}>
              <img src={checklists} className={classes.icon} alt="" />
              <span class={classes.heading}>EDIT DETAILS</span>
            </div>
          </Link>
          <Link to="#">
            <div className={classes.link}>
              <img src={lists} className={classes.icon} alt="" />
              <span class={classes.heading}>POSTED INTERNSHIPS</span>
            </div>
          </Link>
          <Link to="#">
            <div className={classes.link}>
              <img src={post} className={classes.icon} alt="" />
              <span class={classes.heading}>POST NEW INTERNSHIPS</span>
            </div>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CompanySidebar;

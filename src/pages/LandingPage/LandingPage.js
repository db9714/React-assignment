import React from "react";
import { Container } from "react-bootstrap";

import Header from "../../components/Header/Header";

import styles from "./css/LandingPage.module.css";
import { FIFA_DATA } from "./../../config";
class LandingPage extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Container className={styles.container} fluid>
          <div className="d-flex flex-column mt-4">
          <span className="pageTitleStyle">Stadiums</span>
            <div className={styles.stadiumSection}>
              {FIFA_DATA.stadium.map((itm, index) => (
                <div
                  key={index}
                  className={["d-flex", styles.listOuter].join(" ")}
                >
                  <div className="d-flex align-items-center">
                    {itm.logo && (
                      <img
                        alt={"Logo"}
                        src={itm.logo}
                        className={["w-100", styles.smallLogo].join(" ")}
                      />
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span style={{ fontSize: 23 }}>{itm.name}</span>
                    <span>Capacity :- {itm.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default LandingPage;

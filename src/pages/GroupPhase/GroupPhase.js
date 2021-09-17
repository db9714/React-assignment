import React from "react";
import { Container } from "react-bootstrap";
import { FIFA_DATA } from "../../config";
import Header from "../../components/Header/Header";
import styles from "./css/GroupPhase.module.css";

class GroupPhase extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Container className={styles.container} fluid>
          <div className="d-flex flex-column mt-4">
            <span className="pageTitleStyle">Group Phase</span>
            <div style={{ width: "100%" }} className={styles.teamsSection}>
              {FIFA_DATA.GroupPhase.map((itm, i) => (
                <div key={i} className={["d-flex", styles.listOuter].join(" ")}>
                  {Object.keys(itm).map((itm, indexx) => (
                    <div key={indexx} className={styles.columnStyle}>
                      <span value={indexx}>Group {itm[indexx]}</span>
                    </div>
                  ))}
                  {Object.values(itm).map((itm1, index1) => (
                    <div key={index1} className={styles.columnStyle}>
                      <div className="d-flex flex-column">
                        {itm1.map((country, index2) => (
                          <div className="p-2">
                            {country.logo && (
                              <img
                                alt={"Logo"}
                                src={country.logo}
                                className={["w-100", styles.smallLogo].join(
                                  " "
                                )}
                              />
                            )}
                            <span key={index2}>{country.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default GroupPhase;

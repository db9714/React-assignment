import React from "react";
import { Container } from "react-bootstrap";
import { FIFA_DATA } from "../../config";
import ReactFlow, { StraightEdge } from "react-flow-renderer";
import Header from "../../components/Header/Header";
import styles from "./css/KnockoutPhase.module.css";

class KnockoutPhase extends React.Component {
  state = {
    teamtList: [],
    selectedTeam: [],
  };
  componentDidMount() {
    let ele = [];
    FIFA_DATA.KnockoutPhase.map((itm, index) => {
      let x = {
        id: index.toString(),
        data: {
          label: (
            <ChartElement showTeamData={(e) => this.showTeamData(e)} {...itm} />
          ),
        },
        position: itm.position,
        style: { padding: 5 },
      };
      return ele.push(x);
    });

    ele.push(
      { id: "e0-8", source: "0", target: "8" },
      { id: "e1-8", source: "1", target: "8" },
      { id: "e2-9", source: "2", target: "9" },
      { id: "e3-9", source: "3", target: "9" },
      { id: "e4-10", source: "4", target: "10" },
      { id: "e5-10", source: "5", target: "10" },
      { id: "e6-11", source: "6", target: "11" },
      { id: "e7-11", source: "7", target: "11" },
      { id: "e8-13", source: "8", target: "12" },
      { id: "e9-13", source: "9", target: "12" },
      { id: "e10-14", source: "10", target: "13" },
      { id: "e11-14", source: "11", target: "13" },
      { id: "e14-15", source: "14", target: "15" },
      { id: "e13-15", source: "13", target: "15" },
      { id: "e12-14", source: "12", target: "14" },
      { id: "e13-14", source: "13", target: "14" }
    );
    this.setState({ teamtList: ele });
  }
  showTeamData = (team) =>
    this.setState({
      selectedTeam: FIFA_DATA.Teams.filter((team1) => team1.name === team),
    });

  render() {
    const { teamtList, selectedTeam } = this.state;

    return (
      <>
        <Header />
        <Container className={styles.container} fluid>
          <div className="d-flex flex-column mt-4">
            <span className="pageTitleStyle">Knockout Phase</span>
            <div className="d-flex">
              <div className={styles.knockoutSection}>
                <BasicFlow teamtList={teamtList} />
              </div>
              <div style={{ width: "20%" }}>
                {selectedTeam.length > 0 && (
                  <div className={styles.teamDetails}>
                    <span className="text-center d-block">
                      {selectedTeam[0].name}
                    </span>

                    <img
                      alt={"Logo"}
                      src={selectedTeam[0].logo}
                      className={["w-100", styles.teamLogo].join(" ")}
                    />
                    <span className="text-center d-block">
                      {selectedTeam[0].id}
                    </span>
                    <span className="text-center d-block">
                      {selectedTeam[0].description &&
                        selectedTeam[0].description}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
const BasicFlow = (props) => (
  <ReactFlow
    elements={props.teamtList}
    selectNodesOnDrag={false}
    edgeTypes={{ straight: StraightEdge }}
  />
);

const ChartElement = (props) => (
  <>
    {console.log(props)}
    <div className={styles.outerBlock}>
      <span
        onClick={() => props.showTeamData(props.nameteam1)}
        className={styles.cursorStyle}
      >
        {props.logo && (
          <img
            alt={"Logo"}
            src={props.logo}
            className={["w-100", styles.smallLogo].join(" ")}
          />
        )}
        {props.nameteam1}
      </span>
      <span className={styles.points}>{props.goalTeam1}</span>
    </div>
    <div className={styles.secondOuterBlock}>
      <span
        onClick={() => props.showTeamData(props.nameteam2)}
        className={styles.cursorStyle}
      >
        {props.logo && (
          <img
            alt={"Logo"}
            src={props.logo}
            className={["w-100", styles.smallLogo].join(" ")}
          />
        )}
        {props.nameteam2}
      </span>
      <span className={styles.points}>{props.goalTeam2}</span>
    </div>
    <div className="d-flex">
      <span>{props.date} - </span>
      <span className="ml-3">{props.location}</span>
    </div>
  </>
);
export default KnockoutPhase;

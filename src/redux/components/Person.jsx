import { connect } from "react-redux";
import { changePersonStatus } from "../actions";

const Person = (props) => {
  const { person, changePersonStatus } = props;

  const changeStatus = (status) =>
    changePersonStatus(status === "safe" ? "danger" : "safe");

  return (
    <div className={person.status === "danger" ? "danger" : ""}>
      <p>Name: {person.name}</p>
      <p>Last Name: {person.lastName}</p>
      <p>Age: {person.age}</p>
      <p>Status: {person.status}</p>
      <button type="button" onClick={() => changeStatus(person.status)}>
        Change status
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { person } = state;
  return { person };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePersonStatus: (status) => dispatch(changePersonStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);

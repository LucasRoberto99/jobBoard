const Job = (props) => {
  return (
    <div className={`${props.className} box`}>
      <h1 className="job">{props.title}</h1>
      <div className="contract">
        {props.contractType} - {props.country} -{props.city}
      </div>
    </div>
  );
};

export default Job;

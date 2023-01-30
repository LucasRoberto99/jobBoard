const Job = (props) => {
  //   il faut un cube rouge
  return (
    <div className={`${props.className} box`}>
      <h1 className="job">{props.title}</h1>
      <div className="contract">{props.contractType}</div>
      <div className="country">{props.country}</div>
      <div className="city">{props.city}</div>
    </div>
  );
};

export default Job;

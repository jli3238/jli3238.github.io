import React from 'react';

const ObjectComposition = () => {
  function FancyBorder(props) {
    return (<div className={"fancyborder-" + props.color}>{props.children}</div>);
  }
  function DialogContainment(props) {
    return (<FancyBorder color={props.color}>
      <h5 className="Dialog-title">Welcome</h5>
      <p className="Dialog-message">Thank you for visiting our spacecraft-Containment! </p>       
    </FancyBorder>)
  }
  function DialogSpecialization(props) {
    return (<FancyBorder color="green">
      <h5 className="Dialog-title">{props.title}</h5>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
    );
  }
  return (
    <>
        <div className="section-title">Containment and Specilization</div> 
        <div className="section-body">
          <p>{`Containment`}</p>
          <DialogContainment color="blue" />
          <p>{`Specialization`}</p>
          <DialogSpecialization title="Welcome" message="Thank you for visiting our spacecraft-Specialization!" />
        </div>
    </>)
}

export default ObjectComposition;
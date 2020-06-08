import React from 'react';
import PageContainer from './PageContainer';

const ComponentComposition = () => {
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
    <PageContainer 
        title='Component Composition'
        description='Component Composition'>
        <div>
          <p>Containment</p>
          <DialogContainment color="blue" />
          <p>Specialization</p>
          <DialogSpecialization title="Welcome" message="Thank you for visiting our spacecraft-Specialization!" />
        </div>
    </PageContainer>)
}

export default ComponentComposition;
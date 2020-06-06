import React from 'react';

const PageContainer = (props) => 
    <>
        <div className="section-title">{props.title}</div> 
        <div className="section-body">
            <p>{props.description}</p>
            <>
                {props.children}
            </>
            <span><label>{props.resultDescription}</label><span className="algorithm-result">{props.result}</span></span>
        </div>
    </>
export default PageContainer;
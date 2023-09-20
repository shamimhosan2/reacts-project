import React from 'react';

const JobList = ({data}) => {
    console.log(data);
     const{Jobsavailable,Catagory,Categoryname} = data;
    return (
        <div>
            <img src={Catagory} alt="" />
            <h2>{Categoryname}</h2>
            <p>{Jobsavailable}</p>
        </div>
    );
};

export default JobList;
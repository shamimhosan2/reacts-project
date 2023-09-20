import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
const Home = () => {
    //  const Datas = useLoaderData();
    //   console.log(Datas);
    const datas = useLoaderData();
    // console.log(datas)
    return (
            <div>
                  <div className='review'>
                    <div className='container '>  
                       <div className='Dreamar'>
                           <div>
                               <h2 className='dremaer-name'>One Step<br />Closer To Step<br/> <p className='job'>Dream Job</p></h2>
                               <p className='dreamar-explore'>Explore thousands of job opportunities with all the <br />
                               information you need. Its your future. come find it. Manage all <br />
                                your job application from start to finish.</p>
                               <button type="button" className="btn btn-primary">Get Started</button>
                              </div>
                              <div className='dreamar-img'>
                             <img src="/src/All Images/P3OLGJ1 copy 1.png" alt="" />
                         </div>
                     </div>
                 </div>
             {/* //main part start */}
              </div>

                {
                    datas.map(data => <JobList 
                    key={data.id}
                    data = {data}
                    ></JobList> )
                }
             </div>
        
        
    );
};

export default Home;
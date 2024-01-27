import React, { useEffect, useState } from 'react'
import "./AreaAdmin.css";
import SideBar from '../../Components/sideBar/SideBar';
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, PieChart, Pie, Legend, Rectangle } from 'recharts';
import { Zoom } from 'react-reveal';



const AreaHomePage = () => {
  const [users , setUser] = useState([]);
  const [pending , setPending] = useState([]);
  const [numberDocument , setNumberDocument] = useState();
  const [numSignup , setNumSignup] = useState();
  const [numDemande ,setNumDemande]  = useState();

  useEffect(() => {
    const getAllUsers =  async () => {
      const {data} = await axios.get("http://localhost:8082/getAllAddedUsers");
      const {data:dt} = await axios.get("http://localhost:8082/allUsers");
      const {data : documents} = await axios.get("http://localhost:8082/getAllDocument");
      const {data : DemandeInscription} = await axios.get("http://localhost:8082/allUsers");
      const  {data : demandes} = await axios.get("http://localhost:8082/getAllDemande");
      setNumDemande(demandes.length);
      setNumSignup(DemandeInscription.length);
      setNumberDocument(documents.length);
      setUser(data);
      localStorage.setItem("users",JSON.stringify(data));
      // localStorage.setItem("fct",JSON.parse(dt));
      setPending(dt);
      return ;
    }
    getAllUsers();
  },[]);
  let i = 0 ;
  users.map(user => {
    if(user.gender === "male"){
      i++
    }
  })
  
  const numUsers = users.length;
  const numFonctional = pending.length ; 
  const data = [
    {name : "male" , value: i},
    {name : "female" , value: numUsers - i},
  ]
  const data2 = [
    {name : "inscrits" , value : numUsers },
    {name : "non-inscrits" , value : numFonctional },
  ]
  const data3 = [
     {name: "fes" , value: 1},
     {name: "rabat" , value: 2},
     {name: "merrakech" , value: 5},
     {name: "sefrou" , value: 4},
  ]
  const DocumentDemande = [
    {name : "demande_document" , value : numDemande},
    {name : "documents " , value : numberDocument},
    {name : "demande_signup" , value : numSignup}
  ];

  const documentDemande = (
    <LineChart
    width={400}
    height={200}
    data={DocumentDemande}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis dataKey="value" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
  )


  const renderLineChart = (
   
    
    <PieChart width={200} height={200}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
    </PieChart>
 
  );

  const chiLhaja = (  
    <LineChart
    width={400}
    height={200}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis dataKey="value" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#008000" activeDot={{ r: 8 }} />
    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
  </LineChart>
);
const InscritEtNon = (  
  <LineChart
  width={400}
  height={200}
  data={data2}
  margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis dataKey="value" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="value" stroke="#008000" activeDot={{ r: 8 }} />
  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
</LineChart>
);

const ville = (  
  <LineChart
  width={400}
  height={200}
  data={data3}
  margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis dataKey="value" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="value" stroke="#008000" activeDot={{ r: 8 }} />
  {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
</LineChart>
);
const ville2 = (
      <BarChart
        width={400}
        height={200}
        data={data3}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
      }}
    >
    <CartesianGrid strokeDasharray="3 3"  />
    <XAxis dataKey="name" />
    <YAxis  dataKey="value"/>
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    {/* <Bar dataKey="uvl" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
  </BarChart>
)
  return (
    <div className='d-flex flex-direction-row justify-content-end align-items-center'>
      <div className='side-1'>
          <SideBar />
      </div>

      <div className='side-2'>
            <div className='sub-side-22 mt-5'>
            
              <h1 className='mb-4 text-white' >Statistiques </h1>
            
              <div className='d-flex flex-direction-row justify-content-center align-items-center '>
                <Zoom bottom  >
                  <div className='box-1 bg-dark d-flex flex-column justify-content-center align-items-center'>
                      <div className='w-100 d-flex flex-direction-row justify-content-around align-items-center '>
                        <h1 className='text-white fs-3  custumize'>+{numUsers} Clients </h1>
                        <i className='fa-solid fa-user  size'></i>
                      </div>
                      <p className='text-white fs-5 '>Inscrits dans la platform</p>
                  </div>
                  <div className='box-1 bg-dark d-flex flex-column justify-content-center align-items-center'>
                      <div className='w-100 d-flex flex-direction-row justify-content-around align-items-center '>
                        <h1 className='text-white fs-3  custumize'>+{numberDocument} Document </h1>
                        <i className='fa-solid fa-file  size'></i>
                      </div>
                      <p className='text-white fs-5 '>Plus de {numberDocument} documents a egalise</p>
                  </div>
                </Zoom>
              </div>

              <div className='d-flex flex-direction-row justify-content-center align-items-center'>
              <Zoom bottom  >
                  <div className='box-1 bg-dark d-flex flex-column justify-content-center align-items-center'>
                      <div className='w-100 d-flex flex-direction-row justify-content-around align-items-center '>
                        <h1 className='text-white fs-3  custumize'>+{numDemande} Demande </h1>
                        <i className='fa-solid fa-user  size'></i>
                      </div>
                      <p className='text-white fs-5 '>Demandé par le client</p>
                  </div>
                  <div className='box-1 bg-dark d-flex flex-column justify-content-center align-items-center'>
                      <div className='w-100 d-flex flex-direction-row justify-content-around align-items-center '>
                        <h1 className='text-white fs-3  custumize'>+1 admin </h1>
                        <i className='fa-solid fa-user  size'></i>
                      </div>
                      <p className='text-white fs-5 '>Inscrits dans la platform</p>
                  </div>
                </Zoom>
              </div>


                <div className='mt-4'>
                  <h1 className='mt-4 text-center text-white'>Real time Graphes </h1>
                  <div className='graphs'>
                    {/* <div className=''>
                      {renderLineChart}

                    </div> */}
                  <Zoom>
                    <div className='classias mt-2'>
                      <h1 className='fs-6 text-white text-center p-3'> Graph pour le sexe de  clients </h1>
                      {chiLhaja}
                    </div>
                    <div className='classias mt-2'>
                      <h1 className='fs-6 text-white text-center p-3'> Graph pour le nombre de  clients </h1>
                      {InscritEtNon}
                    </div>
                    <div className='classias mt-2'>
                      <h1 className='fs-6 text-white text-center p-3'> Graph pour ville de  clients </h1>
                        {ville2}
                    </div>
                    <div className='classias mt-2'>
                      <h1 className='fs-6 text-white text-center p-3'> Graph pour le gendre de  clients </h1>
                        {documentDemande}
                    </div>
                  </Zoom>

                  </div>

                </div>






            </div>
      </div>      
    </div>
  )
}

export default AreaHomePage
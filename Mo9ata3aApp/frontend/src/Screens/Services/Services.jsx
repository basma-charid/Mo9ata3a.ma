import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar'
import "./Services.style.css";
import {Table , Modal , Form , Button} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Services = () => {
    const [show, setShow] = useState(false);
    const [id , setId] = useState();
    const [service_name , setServiceName] = useState();
    const [data , setData] = useState([]);
    const [name , setName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8082/getAllService").then((res) => {
        setData(res.data);
      }).catch((err) => {
          console.log(err.message);
        });
    },[axios]);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setId(id);
        const dt = data.find(dt => dt.id === id );
        setServiceName(dt.service_name);
        setShow(true);
    };
   
    const handleDelete = async (id) => {
        axios.post("http://localhost:8082/deleteService/"+id);
        // navigate("/Services");
        window.location.reload(true);
    }

    const handleUpdate = async (id) => {
        const {data : NewList} = await axios.post("http://localhost:8082/updateService/"+id,{
            service_name
        });
        setData(NewList);
        console.log(data);
        console.log(id);
    }

    const handleClick = (e) => {
        e.preventDefault();

    }
    const handleSendService =  async (e) => {
      e.preventDefault();
      const {data : AllData} = await axios.post("http://localhost:8082/createService",{
        service_name: name
      })
      setData(AllData);
      setName("");
      return ;
    }


  return (
    <>


        <div className= ' d-flex flex-direction-row  justify-content-end align-items-center'>
        <div className='side-1'> 
                <SideBar />
            </div> 

            <div className='side-2 '>
                            <h1 className='text-center text-white'>Les services Offerts </h1>
                    <div className='sub-side-22 mt-5 advanced container'>
                        <Table className='' stripped hover={true} bordered  variant='dark'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Service_name</th>
                                    
                                    <th>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(dt => {
                                    return (
                                        <tr key={dt.id}>
                                            <td>#</td>
                                            <td>{dt.service_name}</td>
                                            
                                            <td>
                                                <button type="button" onClick={() => handleDelete(dt.id)} className='btn btn-md text-white  back-btn'>Delete</button>
                                                <button type="button" onClick={() => handleShow(dt.id)} className='btn btn-md   text-white back-btn'>update</button>
                                            </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    <h1 className='text-white mt-4'> Add a new service in the System !! </h1>
                      <form className='w-50 d-flex flex-column justify-content-center align-items-center' onSubmit={handleSendService}>
                            <input type="text" placeholder='Service title' className='input-ele input-ele-1 w-100' value={name} onChange={(e) => setName(e.target.value)} required="required"  />
                            <button type="submit" className='btn text-white  back-btn btn-lg'>Create Service</button>
                      </form>
                    </div>
            </div>
        </div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleClick}>
           
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Service name</Form.Label>
              <Form.Control type="text" 
               value={service_name} onChange={(e) => setServiceName(e.target.value)} rows={3} />
            </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(id)}>
            update Service
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    </>

  )
}

export default Services
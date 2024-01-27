import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Table , Modal ,Button, Form} from "react-bootstrap";
import {toast , Toaster} from "sonner";
import {useNavigate} from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import { format } from 'date-fns';


const AllReclamations = () => {
    const  [data , setData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [oneReclamation, setOneReclamaion] = useState(null);
    
    // const [user , setUser] = useState(JSON.parse(localStorage.getItem("user")));
    // console.log(user);
    const [show, setShow] = useState(false);
    const [showUpdate , setShowUpdate] = useState(false);
    const [idtodelete , setIdToDelete] = useState(null);
    const [idtoUpdate , setIdToupdate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setIdToDelete(id);
        setShow(true)
    }; 
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = (id) =>{
        getOneReclamationData(id);
         setIdToupdate(id);
         setShowUpdate(true)
        };
    const [contenu , setContenu] = useState( );
    const [title , setTitle] = useState();
    const [item , setItemText] = useState("are you sure you want to update this !");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const fetchReclamations = async () => {
            const api_link = `http://localhost:8082/getAllReclamation/${user.user_id}`;
            const {data} = await axios.get(api_link);
            setData(data);
        }
        fetchReclamations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[axios]);


    const handleDelete = async (id) => {
        const {user_id} = JSON.parse(localStorage.getItem("user"));
        await axios.post(`http://localhost:8082/DeleteReclamation/${id}/${user_id}`);
        toast.success("reclamation is deleted !! ");
        window.location.reload(true);
    }
    const getOneReclamationData = async (idtoUpdate) => {
        const {user_id} = JSON.parse(localStorage.getItem("user"));
        console.log(user_id);
        const {data} = await axios.get(`http://localhost:8082/getOneReclamation/${idtoUpdate}/${user_id}`)
        setOneReclamaion(data);
        setContenu(data.contenu);
        setTitle(data.title);
    }
    
    const handleUpdate = async (id) => {
        const {user_id} = JSON.parse(localStorage.getItem("user"));
        const {data} = await axios.post(`http://localhost:8082/updateReclamation/${id}/${user_id}`, {
            title   ,
            contenu 
        });
        setContenu(data.contenu);
        setTitle(data.title);
        setItemText("updated !! ");
        window.location.reload(true);
    }


  return (
    <div className='contenaire contenaire'>
        <Navbar />
        <Toaster />
            <div className=' d-flex flex-column justify-content-center'>
                <h1 className='text-center text-white '>List of your Reclamations </h1>
            <div className='container mt-5'>

                <Table  variant='dark' hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>reclamation_title</th>
                            <th>reclamation_Contenu</th>
                            <th>submission_date</th>
                            <th>State</th>
                            <th>operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(rec => {
                                    return (
                                        <tr key={rec.id}>
                                            <td>#</td>
                                            <td>{rec.title}</td>
                                            <td>{rec.contenu}</td>
                                            <td>{
                                                format(new Date(rec.submissionDate), 'yy-MM-dd')
                                            
                                            }</td>
                                            <td>
                                            <button className='btn text-white  back-btn'>
                                                {rec.state}
                                            </button>
                                            </td>
                                            {rec.state === "pending" ?   (
                                                <td>
                                                    <button className='btn  text-white  back-btn' onClick={() => handleShowUpdate(rec.id)}>update</button>
                                                    <button className='btn text-white  back-btn ' onClick={() => handleShow(rec.id)} >delete</button>
                                                </td>
                                            ) : (
                                                <td>
                                                <button disabled className='btn text-white  back-btn ' onClick={() => handleShowUpdate(rec.id)}>update</button>
                                                <button disabled className='btn text-white  back-btn ' onClick={() => handleShow(rec.id)} >delete</button>
                                                </td>
                                            )}
                                      </tr>
                                    )
                                })
                            }
                        </tbody>
                </Table>
            </div>
            </div>
        <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Reclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           Are you shure that you want to delete this reclamation ?? 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{ 
            console.log(idtodelete);
            handleDelete(idtodelete)
            }}>Yes , delete  !!! </Button>
        </Modal.Footer>
      </Modal>

      {/* update reclam */}
      <Modal
                show={showUpdate}
                onHide={handleCloseUpdate}
                backdrop="static"
                keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>update Reclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {idtoUpdate}
           <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"  onChange={(e) => {
                        setTitle(e.target.value) ;
                        setItemText("Are you shure you want to update another time !")
                    }} value={oneReclamation != null || undefined ? title : ""} placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contenu</Form.Label>
                    <Form.Control as="textarea" onChange={(e) => setContenu(e.target.value)} value={oneReclamation != null  ? contenu: ""} rows={3} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(idtoUpdate)}>{item} </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AllReclamations
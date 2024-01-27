import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar';
import  {Table,Modal , Form , Button} from "react-bootstrap";
import axios from "axios";
import {toast,Toaster} from "sonner";
import { format } from 'date-fns';
import emailjs from "@emailjs/browser";




const Demande = () => {
    const config = {
        Username : "hmamedabdelmounaime@gmail.com",
        Password: "C914D3468D079A921152D946FDF944CC93A4",
        Host: "smtp.elasticemail.com",
        To : 'mounaimhmamed@gmail.com',
        From : "hmamedabdelmounaime@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }

    const [users , setUsers] = useState([]); 
    const [demandes ,setDemande] = useState([]);
    const [show, setShow] = useState(false);
    const [idDocUpdate , setIdDocUpdate] = useState(); 
    const [file,setNewFile] = useState();


    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setIdDocUpdate(id);
        setShow(true);
    };


    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get("http://localhost:8082/allUsers");
            const {data: demandes} = await axios.get("http://localhost:8082/getAllDemande");
            setDemande(demandes);
            setUsers(data);
            return;
        }
        getUsers();
        return ;
    },[axios]);


    const handleClick = async (id) => {
        
        console.log(id);
        console.log("wa fin a halfin");
        await axios.post("http://localhost:8082/addClienttoWaitList/"+id);
        window.location.reload(true);
    }
    const form = useRef();

    

    const handleFileUpload = (e) => {
        setNewFile(e.target.files[0]);
        toast.info("document egalisated is uploaded !! ");
        toast.success("try to send it !!");
    }

    const handleUpdate = async () => {
        const  formData = new FormData();
        formData.append("document" , file);
        const {data} = await axios.post("http://localhost:8082/updateDemande/"+idDocUpdate , formData , {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        console.log(data);
        setDemande(data);
    }

    const handleDownload = (doc) => {
        const byteCharacters = atob(doc.base64ImageData);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: 'image/jpeg' });
    
        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `document_${doc.id}.jpg`;
    
        // Trigger download
        document.body.appendChild(link);
        link.click();
    
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

    }


   
  return (
    <>
    <div className= ' d-flex flex-direction-row  justify-content-end align-items-center '>
      {/* <div className='side-1'> */}
          <SideBar />
      {/* </div> */}

      <div className='side-2 advancz'>
                    <h1 className='text-center text-white'>Demande d'inscription </h1>
            <div className='sub-side-22 '>
                        <Table className='m-3 w-75 ' striped  hover variant='dark'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>email</th>
                                    <th>age</th>
                                    <th>gender</th>
                                    <th>State</th>
                                    <th>Approuve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => {
                                    return (
                                        <tr key={user.user_id}>
                                            <td>{user.user_id}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>{user.gender}</td>
                                            <td>
                                                {user.state}
                                            </td>
                                            <td >
                                                <button className='btn text-white  back-btn'  onClick={() => handleClick(user.user_id)} >Approuvé</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table> 
                <h1 className='text-center text-white mt-4'>Demande de documents </h1>

                <Table className=' ' striped  hover variant='dark'>
                            <thead>
                                <tr>
                                    <th>username</th>
                                    <th>raison</th>
                                    <th>secret</th>
                                    <th>submissionDate</th>
                                    <th>state</th>
                                    <th>file</th>
                                    <th>upload document</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demandes.map(demande => {
                                    return (
                                        <tr key={demande.id}>
                                            <td>{demande.user.fullName}</td>
                                            <td>{demande.raison}</td>
                                            <td>{demande.secret_code}</td>
                                            <td>{
                                                format(new Date(demande.submissionDate), 'yy-MM-dd') 
                                            }</td>
                                            <td>
                                                <button className='btn text-white  back-btn btn-sm'>
                                                    {demande.state}
                                                </button>
                                            </td>
                                            <td>{demande.base64Image}</td>
                                            <td>
                                                    <button onClick={() => handleDownload(demande)} className='btn text-white  back-btn'>Download</button>
                                            </td>
                                            <td>
                                                <button className='btn text-white  back-btn ' onClick={() =>  handleShow(demande.id)}>upload</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                </Table>
                </div>
            </div>
            </div>

                
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit the demanded file !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='btn btn-primary btn-lg'>Set egalisated image </Form.Label>
              <Form.Control type="file" onChange={handleFileUpload} placeholder="upload the egalisated image " />
        </Form.Group> 
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" id="alpine" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Demande



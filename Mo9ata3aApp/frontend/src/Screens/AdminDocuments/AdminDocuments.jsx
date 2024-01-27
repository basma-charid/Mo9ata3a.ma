import React, { useEffect, useState } from 'react'
import SideBar from '../../Components/sideBar/SideBar'
import {Table , Modal , Button , Form} from "react-bootstrap";
import axios from "axios";
import {toast , Toaster} from "sonner";
import { format } from 'date-fns';


const AdminDocuments = () => {
    const  [user ,setUser] = useState();
    const [docs , setDocs] = useState([]);
    const [show, setShow] = useState(false);
    const [idDocUpdate , setIdDocUpdate] = useState(); 
    const [file,setNewFile] = useState();


    const handleClose = () => setShow(false);
    const handleShow = (id) => {
    setIdDocUpdate(id);
    setShow(true);
};

    useEffect(() => {
        const getUserAndDocs = async () => {
            const {data : docs} = await axios.get("http://localhost:8082/getAllDocument");
            setDocs(docs);
            // const {data} = await axios.get("http://localhost:8082/client/2");
            // setUser(data);
        };
        getUserAndDocs();
    },[axios]);

    const handleUpdate = async () => {
        const  formData = new FormData();
        formData.append("document" , file);
        const {data} = await axios.post("http://localhost:8082/updateEgalisated/"+idDocUpdate , formData , {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        setDocs(data);

    }

    console.log(docs);
    const handleClick = (docum) => {
        const byteCharacters = atob(docum.base64ImageData);
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
    
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `document_${document.id}.jpg`;
    
        link.click();
    
        URL.revokeObjectURL(link.href);
    }
    const handleFileUpload = (e) => {
        setNewFile(e.target.files[0]);
        toast.info("document egalisated is uploaded !! ");
        toast.success("try to send it !!");
    }


  return (
    <>
    <div className= ' d-flex flex-direction-row  justify-content-end align-items-center'>
            <SideBar />
            <Toaster />
        <div className='side-2 advancz'>
                    <h1 className='text-center text-white'>Documents </h1>
            <div className='sub-side-22 mt-5'>
                <Table className='' striped  hover variant='dark'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>user_name</th>
                                        <th>user_ville</th>
                                        <th>subimission_date</th>
                                        <th>raison</th>
                                        <th>secret</th>
                                        <th>state</th>
                                        <th>document</th>
                                        <th>upload_send</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {docs.map(doc => {
                                        return (
                                            <tr key={doc.id}>
                                                <td>#</td>
                                                <td>{doc.user.fullName}</td>
                                                <td>{doc.user.ville}</td>
                                                <td>{
                                                format(new Date(doc.submissionDate),"yy-MM-dd")
                                                }</td>
                                                <td>{doc.raison}</td>
                                                <td>{doc.secret_code}</td>
                                                <td>
                                                        {doc.state}
                                                </td>
                                                <td>
                                                    <button onClick={() => handleClick(doc)} className='btn text-white  back-btn'>Download</button>
                                                </td>
                                                <td>
                                                    <button className='btn text-white  back-btn ' onClick={() =>  handleShow(doc.id)}>upload</button>
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
          <Modal.Title>Modal heading</Modal.Title>
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

export default AdminDocuments
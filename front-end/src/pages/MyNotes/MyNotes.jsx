import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from 'axios'

const MyNotes = () => {
    const [notes,setNotes]=useState([])
    const deletHandler = (id) => {
        if (window.confirm('Are you sure?')) {
            
        }
  };
  
  
    const fetchNotes = async () => {
        const { data } = await axios.get('/api/notes')
        setNotes(data);
    }
    // console.log('notes',notes);
  
    useEffect(() => {
      fetchNotes()
    }, [])
    
  return (
    <MainScreen title={"Welcome back Kiran Mj"}>
      <Link to={"createnote"}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      fontSize: 18,
                      alignSelf: "center",
                      color: "black",
                      textDecoration: "none",
                      flex: "1",
                      cursor: "pointer",
                    }}
                  >
                    <Accordion.Header as={Card.Text} variant={'link'}>{note.title}</Accordion.Header>
                  </span>
    
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deletHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Body>
                    <Card.Body>
                      <h4>
                        <Badge className="bg-success">Category- {note.category}</Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <p>{note.content}</p>
                        <footer className="blockquote-footer">Created on -date</footer>
                      </blockquote>
                    </Card.Body>
                </Accordion.Body>
              </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;

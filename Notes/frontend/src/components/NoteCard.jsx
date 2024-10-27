import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function NoteCard({ note }) {
  // generate time  ago feature with seconds ago, minutes ago, hours ago and days ago
  const timeAgo = (time) => {
    const seconds = Math.floor((new Date() - new Date(time)) / 1000);
    if (seconds < 60) return `${Math.floor(seconds)} seconds ago`;
    if (seconds < 3600)
      return `${Math.floor(seconds / 60)} minutes ago
    `;
    if (seconds < 86400)
      return `${Math.floor(seconds / 3600)} hours
    `;
    return `${Math.floor(seconds / 86400)} days ago`;
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>{note.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{note.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <p className="m-0">{timeAgo(note.timeStamp)}</p>
        <div>
          <MdEdit className="mx-1 text-primary" />
          <MdDelete className="mx-1 text-danger" />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default NoteCard;

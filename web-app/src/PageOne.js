import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { job_boards as jobBoards } from "./jobBoards.json";
import './PageOne.css';

export const PageOne = () => {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchJobData = async () => {
        const { data } = await axios.get("http://localhost:5000/jobs");
        setLoading(false);
        setJobData(data);
      };
  
      fetchJobData();
  
    }, []);
  
    if (loading) {
      return <Spinner />
    }

    return (
        <div className="page">
            <header>
                <h1>Job Sources</h1>
            </header>
            <Container>
                <Row>
                {jobBoards.map((board, index) => (
                    <Col className="card-container" sm="4" key={index} onClick={() => {
                        const filteredJobs = jobData.filter(job => job.jobSource === board.name).sort((a, b) => b.id - a.id);
                        navigate("/job-sources", { state: { boardName: board.name, jobs: filteredJobs }})
                    }}>
                    <Card className="card-body">
                        <div className="job-rating">
                        <span>{board.rating}</span>
                        </div>
                        <div className="card-body-container">
                        <img src={board.logo_file} alt={board.name} className="card-image" />
                        <p className="board-description">{board.description}</p>
                        </div>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    );
};

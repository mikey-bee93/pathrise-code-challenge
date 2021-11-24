import { useLocation, useNavigate } from "react-router-dom";
import { Container, Table } from "reactstrap";
import "./PageTwo.css";

export const PageTwo = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return navigate("/");
    }

    const { boardName, jobs } = state;

    return (
        <div className="page">
            <header>
                <h1>Job Source: {boardName} </h1>
            </header>
            <Container>
                <Table bordered style={{ width: "1300px" }} size="md">
                    <thead>
                        <tr>
                            <th className="table-column-labels">ID</th>
                            <th className="table-column-labels">Company Name</th>
                            <th className="table-column-labels">Job Title</th>
                            <th className="table-column-labels">Job URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={index}>
                                <td scope="row" className="table-cell">{job.id}</td>
                                <td className="table-cell">{job.companyName}</td>
                                <td className="table-cell">{job.jobTitle}</td>
                                <td className="table-cell">{job.jobUrl}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
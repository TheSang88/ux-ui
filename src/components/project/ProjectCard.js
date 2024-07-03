import { Col } from "react-bootstrap";
import './index.scss'
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default ProjectCard 
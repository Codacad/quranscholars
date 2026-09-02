import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const Icon = service.icon;

  return (
    <div>
      <div />
      <div>
        <div>
          <Icon />
        </div>
        <div>
          <h3>
            {service.title}
          </h3>
          <p>
            {service.description}
          </p>
        </div>
        <div />
        <Link
          to={service.link}>

          
          Learn More
          <span>
            -&gt;
          </span>
        </Link>
      </div>
    </div>);

};

export default Service;

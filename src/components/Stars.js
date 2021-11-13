import { v1 as uuidv1 } from "uuid";
import Star from "./Star";

function Stars({ count }) {
  if (count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }

  const stars = Array(count)
    .fill(0)
    .map(() => <Star key={uuidv1()} />);

  return <ul className="card-body-stars">{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;

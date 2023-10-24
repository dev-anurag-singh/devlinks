import { useParams } from 'react-router-dom';

function Preview() {
  const { id } = useParams();

  return <div>Preview</div>;
}

export default Preview;

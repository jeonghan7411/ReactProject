import { useParams } from "react-router-dom";

function CulturalShow({ cultural }) {
  const { id } = useParams();
  return (
    <>
      {cultural.map((cultural, key) => {
        if (cultural.MYONGCHING === id) {
          return <div key={id}>{cultural.MYONGCHING}</div>;
        }
      })}
    </>
  );
}

export default CulturalShow;

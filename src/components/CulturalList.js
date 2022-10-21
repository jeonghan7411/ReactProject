import CulturalItem from "./CulturalItem";
import LinkIcon from "./layout/LinkIcon";
import "./CulturalList.css";
function CurturalList({ cultural }) {
  return (
    <>
      <LinkIcon />

      <div className="cultural-list-wrap">
        {cultural.map((cultural, key) => {
          return (
            <div key={key}>
              <CulturalItem cultural={cultural} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CurturalList;

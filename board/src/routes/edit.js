import "../App.css"; // 커스텀 CSS 파일 import
import { useParams } from "react-router-dom";

function Edit(props) {
  let { id } = useParams();
  let found = props.contents.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container mt-4">
      <form className="write-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="form-control dark-input"
            placeholder={found.title}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label text-light">
            내용
          </label>
          <textarea
            id="content"
            className="form-control dark-input"
            rows={10}
            placeholder={found.content}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          수정 완료
        </button>
      </form>
    </div>
  );
}

export default Edit;

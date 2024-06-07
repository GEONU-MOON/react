import "../App.css"; // 커스텀 CSS 파일 import

function Edit() {
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
            placeholder="제목을 입력하세요"
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
            placeholder="내용을 입력하세요"
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

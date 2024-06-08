import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";

function Detail(props) {
  let { id } = useParams();
  let found = props.contents.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container mt-4">
      <div className="write-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="form-control dark-input"
            placeholder={found.title}
            readOnly
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
            readOnly
          />
        </div>

        <div className="d-flex justify-content-end mt-3">
          <Link to={`/edit/${id}`} className="btn btn-warning me-2">
            수정하기
          </Link>
          <button type="button" className="btn btn-danger">
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

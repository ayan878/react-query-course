import { GoIssueClosed, GoIssueOpened, GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";

export function IssueItem({
  key,
  title,
  number,
  assisnee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) {
  return (
    <li>
      <div>
        {status === "done" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} by {createdBy}
        </small>
      </div>
      {assisnee ? <div>{assisnee}</div> : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment /> {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}

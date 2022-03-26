import { useState } from "react";

export default function Toast({ subject, content, show = false }) {
  const [hide, setHide] = useState(false);

  if (!show || hide) return null;
  return (
    <div
      id="liveToast"
      className="toast fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="me-auto">{subject}</strong>
        {/* <small>11 mins ago</small> */}
        <button
          onClick={() => setHide(true)}
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      </div>
      <div className="toast-body">{content}</div>
    </div>
  );
}

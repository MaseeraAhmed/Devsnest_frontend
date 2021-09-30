import React, { useState } from "react";

const Toggle = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? (
        <i
          class="bx bx-heart bx-border-circle bx-md"
          style={{
            color: "red",
            position: "relative",
            left: "4.01rem",
            cursor: "pointer",
          }}
        ></i>
      ) : (
        <i
          class="bx bxs-heart bx-border-circle bx-md"
          style={{
            color: "red",
            position: "relative",
            left: "4.01rem",
            cursor: "pointer",
          }}
        ></i>
      )}

      <i
        class="bx bx-heart bx-border-circle bx-md"
        style={{
          color: "red",
          position: "relative",
          opacity: "0%",
          cursor: "pointer",
        }}
        onClick={() => setShow(!show)}
      ></i>
    </div>
  );
};

export default Toggle;

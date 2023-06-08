import React from "react";

const FindMechanic = () => {

    async function handleSubmit(e){
        e.preventDefault();
        console.log("Hello")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          className="findmechanic"
          style={{
            backgroundColor: "#555555",
            color: "white",
            textDecoration: "none",
            marginTop: "20%",
            marginLeft: "45%",
            padding: "12px 28px",
            display: "inline-block",
            fontSize: "16px",
            borderRadius: "2px",
            boxShadow:
              " 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default FindMechanic;

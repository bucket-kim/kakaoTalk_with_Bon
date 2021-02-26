import React from "react";
import { Link } from "react-router-dom";
import "./MainRoom.css";

function MainRoom() {
  return (
    <div className="mainroom">
      <div className="mainroom__container">
        <div className="mainroom__image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="joinFormContainer" component={Paper}>
        <div className="mainroom__main">
          <div className="mainroom__title">
            <h1>KaKao</h1>
          </div>
          <form className="mainroom" noValidate>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="name"
            />
            <input
              type="text"
              onChange={(e) => setRoom(e.target.value)}
              className="name"
            />
            <div className="buttonBox mt-10">
              <link
                className="joinButton"
                rel="stylesheet"
                href=""
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              />
              <Link
                className="joinButtonLink"
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/lamaChat/chat?name=${name}&room=${room}`}
                // href={`/chat?name=${name}&room=${room}`}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="joinButton mt-20"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainRoom;

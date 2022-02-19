import React from "react";
import { connect } from "react-redux";

const Display = ({ contactList }) => {
  return (
    <>
      <div>
        {contactList.length > 0 ? (
          <div>
            {contactList.map((contact) => (
              <p>
                First Name:{contact.fn} LastName: {contact.ln} Mobile:{" "}
                {contact.mobile}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contacts,
  };
};

export default connect(mapStateToProps, null)(Display);

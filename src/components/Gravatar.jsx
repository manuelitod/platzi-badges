import React from "react";
import md5 from "md5";

const Gravatar = (props) => {
  const email = props.email;
  const emailMd5 = md5(email);

  return (
    <>
      <img
        className={props.className}
        src={`https://www.gravatar.com/avatar/${emailMd5}?d=identicon`}
        alt={props.alt}
      />
    </>
  );
};

export default Gravatar;

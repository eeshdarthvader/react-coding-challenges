import { Link, Typography } from "@material-ui/core";
import React from "react";
import { Logo } from "./Logo";

export const SignaturePreview = ({ name, surname, email, roleName }) => {
  return (
    <div>
      <Logo />
      <div>
        <b>
          {name} {surname}
        </b>
        <br />
        {roleName}
        <br />
        <Link href={`mailto: ${email}`}>{email}</Link>
      </div>
     
    </div>
  );
};

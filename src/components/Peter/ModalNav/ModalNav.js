import React from "react";

const ModalNav = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <center>This is the Page</center>
      <center>Coold</center>
      {id}
    </div>
  );
};

export default ModalNav;

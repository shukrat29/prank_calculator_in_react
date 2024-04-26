import React from "react";

export const CustomButton = ({ cls, label, btnClicked }) => {
  return (
    <div className={cls} onClick={() => btnClicked(label)}>
      {label}
    </div>
  );
};

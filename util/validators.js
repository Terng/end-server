module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password must match";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validatePcInput = (
  name,
  sertag,
  assettag,
  vlan,
  ip,
  status,
  positionName,
  positionFloor
) => {
  const errors = {};
  if (name.trim() === "") {
    errors.name = "Name must not be empty";
  }
  if (sertag.trim() === "") {
    errors.sertag = "Service Tag must not be empty";
  }
  if (assettag.trim() === "") {
    errors.assettag = "Asset Tag must not empty";
  }
  if (vlan.trim() === "") {
    errors.vlan = "Vlan must not be empty";
  }
  if (ip.trim() === "") {
    errors.ip = "IP Address must not be empty";
  }
  if (status.trim() === "") {
    errors.status = "Status must not be empty";
  }
  if (positionName.trim() === "") {
    errors.positionName = "Position Name must not be empty";
  }
  if (positionFloor.trim() === "") {
    errors.positionFloor = "Position Floor must not be empty";
  }
  /*   if (posiId.trim() === "") {
    errors.posiId = "Position must not be empty";
  } */
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validatePosiInput = (name, floor) => {
  const errors = {};
  if (name.trim() === "") {
    errors.name = "Name must not be empty";
  }
  if (floor.trim() === "") {
    errors.floor = "floor Tag must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

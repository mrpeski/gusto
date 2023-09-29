const LABELS: Label[] = [
  {
    title: "First Name",
    key: "firstName",
  },
  {
    title: "Last Name",
    key: "lastName",
  },
  {
    title: "Email",
    key: "emailId",
  },
  {
    title: "Phone",
    subtitle: "without dial code",
    key: "phoneNumber",
  },
  {
    title: "Nationality",
    key: "nationality",
  },
  {
    title: "Current Residence",
    key: "currentResidence",
  },
  {
    title: "ID Number",
    key: "idNumber",
  },
  {
    title: "Date of Birth",
    key: "dateOfBirth",
  },
  {
    title: "Gender",
    key: "gender",
  },
];

export const PERSONAL_INFO_LABELS = LABELS.reduce((acc, curr) => {
  acc[curr.key] = curr;
  return acc;
}, {});

export const MB = 1048576;
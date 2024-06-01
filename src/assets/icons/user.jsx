const User = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21C15.866 21 19 19.433 19 17.5C19 15.567 15.866 14 12 14C8.13401 14 5 15.567 5 17.5C5 19.433 8.13401 21 12 21Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default User;

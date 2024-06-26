const Card = (props) => {
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
        d="M22 17V7C22 4.79086 20.2091 3 18 3L6 3C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17Z"
        stroke="#28303F"
        stroke-width="1.5"
        {...props}
      />
      <path
        d="M6 18C6.55228 18 7 17.5523 7 17C7 16.4477 6.55228 16 6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18Z"
        fill="#28303F"
        {...props}
      />
      <path
        d="M2 7H22V11H2V7Z"
        stroke="#28303F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </svg>
  );
};

export default Card;

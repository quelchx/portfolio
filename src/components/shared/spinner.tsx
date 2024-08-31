export function Spinner() {
  return (
    <div
      className="flex justify-center items-center w-full h-96"
      aria-label="loading"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="animate-spin w-10 h-10 text-blue-500"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3a9 9 0 1 0 9 9"
        ></path>
      </svg>
    </div>
  );
}

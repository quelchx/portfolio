export function Warning(props: { title?: string; message?: string }) {
  return (
    <div
      role="alert"
      className="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-5"
    >
      <strong className="block font-medium text-red-800">
        {props.title || "Something went wrong"}
      </strong>

      <p className="mt-2 text-sm text-red-700">
        {props.message ||
          "Please try refreshing the page or check back later. If the problem continues, please contact us. Your patience is appreciated."}
      </p>
    </div>
  );
}

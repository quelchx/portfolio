export default function Page(props: { params: { slug: string } }) {
  return (
    <div>
      <h1>{props.params.slug}</h1>
    </div>
  );
}

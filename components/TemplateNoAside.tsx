import Content from "@/components/Content";

export default function Template(props: { content: any; }) {
  const { content } = props
  return (
    <div className='page-content--article'>
      {content && (
        <>
          {
            content.map((props: any) => <Content key={props.id} {...props} />)
          }
        </>
      )}
    </div>
  );
}
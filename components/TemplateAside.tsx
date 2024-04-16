import Aside from "@/components/Aside";
import Content from "@/components/Content";

interface TemplateProps {
  content: any
  inEnglish?: boolean
}

const Template: React.FC<TemplateProps> = ({ content, inEnglish }) => {
  return (
    <>
      <Aside inEnglish={inEnglish}>
        {content && (
          <ul className='list list__aside mt-4'>
            {
              content.map((props: any) => <Content key={props.id} asideLinks {...props} />)
            }
          </ul>
        )}
      </Aside>
      <div className='page-content'>
        <div className='content container'>
          {content && (
            <>
              {
                content.map((props: any) => <Content key={props.id} withAside {...props} />)
              }
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Template;
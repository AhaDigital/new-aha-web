import Link from "next/link"
import IconChevron from "@/components/primitives/icons/IconChevron"

export interface ListProps {
  classNames?: string
  list: Array<{
    id: string
    text: string
    textSecondary?: string
    linkTo: string
  }>
}

const List: React.FC<ListProps> = ({ classNames, list }) => {
  return (
    <ul className={classNames ? `list ${classNames}` : 'list'}>
      {list.map(({ id, text, textSecondary, linkTo }) => (
        <li key={id}>
          <Link href={linkTo}>
            <div>
              <span>{text}</span>
              {textSecondary && <span>{textSecondary}</span>}
            </div>
            <IconChevron />
          </Link>
        </li>
      ))}
    </ul>
  );
};


export default List;

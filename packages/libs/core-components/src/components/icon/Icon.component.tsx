import Link from 'next/link';
import { IconType } from 'react-icons';

export interface IconProps {
  name: string;
  icon: IconType;
  linkURL?: string;
}

export function Icon(props: IconProps) {
  return (
    <Link href={props.linkURL ? props.linkURL : '#'}>
      <div className="text-primary hover:text-secondary flex cursor-pointer items-center">
        <props.icon className="mr-2 h-8 w-8" />
        <span
          id="icon-title"
          className="font-arimaMadurai self-center whitespace-nowrap text-2xl font-extrabold"
        >
          {props.name}
        </span>
      </div>
    </Link>
  );
}

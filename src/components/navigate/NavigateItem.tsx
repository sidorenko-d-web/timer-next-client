import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

export const NavigateItem = ({
  icon,
  value,
  link,
}: {
  icon: IconDefinition;
  value: string;
  link?: string;
}) => {
  return (
    <Link href={link ? link : "#"} className="flex items-end text-xl gap-8">
      <FontAwesomeIcon icon={icon} className="fas fa-check w-8 h-8" />
      <h2>{value}</h2>
    </Link>
  );
};

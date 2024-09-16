import Link from "next/link";
import clsx from "clsx";

interface routeProps {
    route: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Route = ({route,label,isActive,onClick}: routeProps) => {
    return (
        <div className="relative">
            <Link
                href={route}
                onClick={onClick}
                className={clsx(
                    isActive && "text-darkBlue rounded-none hover:bg-darkBlue/10 hover:border-2 hover:border-b-darkBlue p-1"
                )}
            >
                {label}
            </Link>
        </div>
    )
}

export default Route
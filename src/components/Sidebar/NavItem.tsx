import { useRouter } from "next/router";
import React from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { useUserContext } from "@/context/userContext";
import { Button } from "@material-tailwind/react";

interface Props {
  Inco: React.ElementType;
  name: string;
  href?: string; // Make href optional
  children?: React.ReactNode;
}

function NavItem({ Inco, name, href, children }: Props) {
  const router = useRouter();
  const { state } = useUserContext();
  const { sidenavColor, sidenavType } = state;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const isActive = router.pathname === href;

  const getColor = ():
    | "white"
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red" => {
    if (isActive) {
      return sidenavColor;
    }
    if (sidenavType === "gray") {
      return "white";
    }
    if (sidenavType === "white") {
      return "gray";
    }
    if (sidenavType === "transparent") {
      return "red";
    }
    return "blue-gray";
  };
  return (
    <div className="flex flex-col">
      {href ? (
        <Button
          variant={isActive ? "gradient" : "text"}
          color={getColor()}
          onClick={() => {
            handleToggle();
            router.push(href);
          }}
          className={`flex w-full items-center gap-4 rounded-md p-2 font-sans text-xs font-bold capitalize ${
            router.pathname === href
              ? `bg-${getColor()} text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40`
              : "bg-0D0E12 text-slate-400  active:opacity-[0.85]"
          } transition-all`}
          placeholder={undefined}
        >
          <Inco
            className={`h-5 w-5 ${
              isActive ||
              (sidenavType !== "white" && sidenavType !== "transparent")
                ? "text-white "
                : "text-black"
            }`}
          />
          <p
            className={`block font-sans font-medium capitalize leading-relaxed text-inherit antialiased ${
              isActive ||
              (sidenavType !== "white" && sidenavType !== "transparent")
                ? "text-white "
                : "text-black hover:text-black active:opacity-[0.85]"
            }`}
          >
            {" "}
            {name}
          </p>
          {children && (
            <div className="ml-auto">
              {isExpanded ? (
                <AiFillCaretDown className="h-5 w-5 text-slate-400" />
              ) : (
                <AiFillCaretRight className="h-5 w-5 text-slate-400" />
              )}
            </div>
          )}
        </Button>
      ) : (
        <div
          onClick={handleToggle}
          className={`flex w-full items-center gap-4 rounded-md p-2 font-sans text-xs font-bold capitalize ${
            router.pathname === href
              ? `bg-${getColor()} text-white shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/40`
            : "bg-0D0E12 text-slate-400  active:opacity-[0.85]"
            // hover:text-gray-50
          } transition-all`}
        >
          <Inco
            className={`h-5 w-5 ${
              isActive ||
              (sidenavType !== "white" && sidenavType !== "transparent")
                ? "text-white"
                : "text-black"
            }`}
          />
          <p
            className={`block font-sans font-medium capitalize leading-relaxed text-inherit antialiased ${
              isActive ||
              (sidenavType !== "white" && sidenavType !== "transparent")
                ? "text-white"
                : "text-black hover:text-black active:opacity-[0.85]"
            }`}
          >
            {" "}
            {name}
          </p>{" "}
          {children && (
            <div className="ml-auto">
              {isExpanded ? (
                <AiFillCaretDown className="h-5 w-5 text-slate-400" />
              ) : (
                <AiFillCaretRight className="h-5 w-5 text-slate-400" />
              )}
            </div>
          )}
        </div>
      )}

      {children && isExpanded && (
        <div className="pl-4 mt-2">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              className: `pl-4 ${
                router.pathname === href ? "text-indigo-400" : ""
              }`,
            })
          )}
        </div>
      )}
    </div>
  );
}

export default NavItem;

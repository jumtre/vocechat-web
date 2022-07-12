import { FC, MouseEvent } from "react";
import StyledMenu from "./styled/Menu";

export interface Item {
  title: string;
  icon?: string;
  handler: (e: MouseEvent) => void;
  underline?: boolean;
  danger?: boolean;
}

interface Props {
  items: Item[];
  hideMenu?: () => void;
}

const ContextMenu: FC<Props> = ({ items = [], hideMenu = null }) => {
  return (
    <StyledMenu>
      {items.map((item) => {
        if (!item) return null;
        const {
          title,
          icon = null,
          handler = (evt) => {
            evt.preventDefault();
            if (hideMenu) {
              hideMenu();
            }
          },
          underline = false,
          danger = false
        } = item;
        return (
          <li
            className={`item ${underline ? "underline" : ""} ${danger ? "danger" : ""}`}
            key={title}
            onClick={(evt) => {
              evt.stopPropagation();
              evt.preventDefault();
              handler(evt);
              if (hideMenu) {
                hideMenu();
              }
            }}
          >
            {icon}
            {title}
          </li>
        );
      })}
    </StyledMenu>
  );
};

export default ContextMenu;
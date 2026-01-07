export interface IMenu {
  title: string;
  items: IMenuItems[];
  collapsed?: boolean;
  permission?: string[];
}

export interface IMenuItems {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType;
}

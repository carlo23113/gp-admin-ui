export interface NavLink {
  icon?: string;
  route?: string;
  title: string;
  children?: Array<NavLink>;
}

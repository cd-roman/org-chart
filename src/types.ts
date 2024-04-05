export interface EmployeeData {
  name: string;
  expanded: boolean;
  data: {
    id: string;
    avatar: string;
    title: string;
  };
  children?: EmployeeData[];
}

export interface NewEmployeeData {
  name: string;
  expanded: boolean;
  data: {
    avatar: string;
    title: string;
  };
}

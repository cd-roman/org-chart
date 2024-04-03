export interface NodeObject {
  name: string;
  expanded: boolean;
  data: {
    id: string;
    avatar: string;
    title: string;
  };
  children?: NodeObject[];
}

export interface NewEmployeeData {
  name: string;
  expanded: boolean;
  data: {
    avatar: string;
    title: string;
  };
}

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

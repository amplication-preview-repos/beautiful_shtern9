export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  permissions?: Array<"Option1">;
};

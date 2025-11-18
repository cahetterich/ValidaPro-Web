// src/lib/types/messages.ts
export type UserRole = "candidate" | "mentor" | "company" | "system";

export interface MessageUser {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

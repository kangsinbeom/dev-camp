import { AccountForm } from "@/models/auth";

export const FIRSTFORM = [
  {
    id: "name",
    label: "이름",
    type: "text",
    isText: "TEXT_FIELD",
    required: true,
  },
  {
    id: "email",
    label: "이메일",
    type: "email",
    isText: "TEXT_FIELD",
    required: true,
  },
  {
    id: "phone",
    label: "연락처",
    type: "tel",
    isText: "TEXT_FIELD",
    required: true,
  },
  {
    id: "role",
    label: "역할",
    type: "role",
    isText: "SELECT",
    items: ["관리자", "일반 사용자"],
    required: true,
  },
] as AccountForm[];

export const SECOUNDFORM = [
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    isText: "TEXT_FIELD",
    required: true,
  },
  {
    id: "CheckPassword",
    label: "비밀번호 확인",
    type: "password",
    isText: "TEXT_FIELD",
    required: true,
  },
] as AccountForm[];

export const VALIDATION_MESSAGE_MAP: {
  [key: string]: { value: RegExp; message: string };
} = {
  name: {
    value: /^[가-힣]+$/,
    message: "한글명을 확인해주세요",
  },
  email: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "이메일 형식을 확인해주세요",
  },
  phone: {
    value: /^\d+$/,
    message: "전화번호를 확인해주세요",
  },
};

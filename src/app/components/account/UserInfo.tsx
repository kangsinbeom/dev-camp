import { Button } from "@/components/ui/button";
import SelectField from "../shared/SelectField";

interface UserInfoProps {
  hasEmail?: boolean;
  name: string;
  phone: string;
  address: React.ReactNode;
}

const UserInfo = ({ hasEmail = true, name, phone, address }: UserInfoProps) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="text-gray-300">{phone}</p>
        </div>
        <Button variant="outline">{hasEmail ? "수정" : "변경"}</Button>
      </div>
      <div>{address}</div>
      {!hasEmail && (
        <SelectField
          label="배송 메모"
          items={[
            "집 앞에 놔주세요",
            "오기 전에 연락해주세요",
            "관리실에 맡겨주세요",
          ]}
          placeholder="배송메모를 선택해주세요"
        />
      )}
    </>
  );
};

const UserAddress = ({
  isEmail = true,
  address,
}: {
  isEmail?: boolean;
  address?: React.ReactNode;
}) => {
  if (isEmail && address) return <p className="text-gray-300">{address}</p>;

  return <div>{address}</div>;
};

UserInfo.Address = UserAddress;

export default UserInfo;

import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";

interface ButtonBoxProps {
  isFirst: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: () => void;
}

const ButtonBox = ({ isFirst, onClick, onSubmit }: ButtonBoxProps) => {
  return (
    <div className="flex gap-2">
      {isFirst ? (
        <Button onClick={onClick}>다음 단계로</Button>
      ) : (
        <>
          <Button onSubmit={onSubmit}>계정 등록하기</Button>
          <Button onClick={onClick} variant="ghost">
            이전 단계로
          </Button>
        </>
      )}
    </div>
  );
};

export default ButtonBox;

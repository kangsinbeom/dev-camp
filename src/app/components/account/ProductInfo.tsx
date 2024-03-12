import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductInfoProps {
  name: string;
  amount: string;
  price: number;
}

const ProductInfo = ({ amount, name, price }: ProductInfoProps) => {
  return (
    <div className="flex">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UVig9N_T_aVFtnzzI3sOKgGpqgzHfMVKdLtXk0vvD-dH4zsCKWPMjAX4eLRXWYbS6Lk&usqp=CAU"
        alt="product image"
        height={100}
        width={100}
        priority
      />
      <div className="flex flex-col gap-1">
        <p>{name}</p>
        <div className="flex gap-1">
          <Badge variant="outline" className="text-gray-300">
            필수
          </Badge>
          <p className="text-sm text-gray-300">
            <span className="font-bold">용량:</span>
            {amount}
          </p>
        </div>
        <p className="font-bold">{price}원</p>
      </div>
    </div>
  );
};

export default ProductInfo;

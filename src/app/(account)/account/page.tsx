import InfoBox from "@/app/components/account/InfoBox";
import PriceInfo from "@/app/components/account/PriceInfo";
import ProductInfo from "@/app/components/account/ProductInfo";
import UserInfo from "@/app/components/account/UserInfo";

const AccountPage = () => {
  return (
    <div className="flex flex-col px-10">
      <p className="flex text-4xl justify-center py-10">결제하기</p>
      <div className="grid gap-4 grid-cols-2 auto-rows-[20px]">
        <InfoBox
          title="주문 상품 정보"
          content={
            <ProductInfo
              amount="80ml - 1개"
              name="Daily Facial Soap"
              price={18000}
            />
          }
        />
        <InfoBox title="최종 결제 금액" content={<PriceInfo />} />
        <InfoBox
          title="주문자 정보"
          content={
            <UserInfo
              name="강신범"
              phone="0105901224"
              address={<UserInfo.Address address="kangsinbeom2448@gmail.com" />}
            />
          }
        />
        <InfoBox
          title="배송 정보"
          content={
            <UserInfo
              hasEmail={false}
              name="강신범"
              phone="0105901224"
              address={
                <UserInfo.Address
                  address={
                    <>
                      <p>경상북도 봉화군 봉화읍 교촌2길 5</p>
                      <p>101동 301호</p>
                      <p>(36238)</p>
                    </>
                  }
                  isEmail={false}
                />
              }
            />
          }
        />
      </div>
    </div>
  );
};

export default AccountPage;

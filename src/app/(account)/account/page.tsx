import InfoBox from "@/app/components/account/InfoBox";
import ProductInfo from "@/app/components/account/ProductInfo";
import UserInfo from "@/app/components/account/UserInfo";

const AccountPage = () => {
  return (
    <div className="flex flex-col px-10">
      <p className="flex text-4xl justify-center py-10">결제하기</p>
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
  );
};

export default AccountPage;

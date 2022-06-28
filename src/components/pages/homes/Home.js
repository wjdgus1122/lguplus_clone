import { TopBanner } from "./TopBanner";
import styled from "styled-components";

const MainBanner = styled.div`
  height: 200vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Home = () => {
  return (
    <>
      <MainBanner>
        <TopBanner />
        <BottomBanner>
          <Title>
            오직 유플러스에서만 가능한 <br /> 혜택을 만나보세요
          </Title>
          <ConWrap>
            <LeftCon>
              <ConTitle>온라인 전용 5G 다이렉트 요금제</ConTitle>
              <ConDesc>
                갤럭시 워치4 &amp; 버즈2 <br />
                100% 할인 받을 수 있어요
              </ConDesc>
            </LeftCon>
            <RightCon>
              <TopCon>
                <BCon>
                  <ConTitle>매달 최대 10,000원 쇼핑쿠폰팩 증정</ConTitle>
                </BCon>
                <SCon></SCon>
              </TopCon>
            </RightCon>
          </ConWrap>
        </BottomBanner>
      </MainBanner>
    </>
  );
};

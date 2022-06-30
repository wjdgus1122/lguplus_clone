import styled from "styled-components";

const Section = styled.div`
  padding: 120px 200px;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
const ProductWrap = styled.div`
  width: 100%;
  height: 90vh;
`;
const ProductSlide = styled.div`
  width: 300%;
  height: 100%;
  display: flex;
`;
const PropductCon = styled.div`
  font-size: 32px;
  font-weight: 500;
`;
const ProTitle = styled.div``;
const Product = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const LeftPro = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 14px;
`;
const STitle = styled.div``;
const SPrice = styled.div``;
const RightPro = styled.div``;
const Top = styled.div``;
const Con = styled.div``;
const Bottom = styled.div``;

export const Section_4 = () => {
  return (
    <Section>
      <Title>
        가장 많은 혜택을 받는
        <br />
        기기를 추천해 드려요
      </Title>
      <ProductWrap>
        <ProductWrap>
          <ProductSlide>
            <PropductCon>
              <ProTitle>추천</ProTitle>
              <Product>
                <LeftPro>
                  <STitle>갤럭시 S22</STitle>
                  <SPrice>월 98,560원</SPrice>
                </LeftPro>
                <RightPro>
                  <Top>
                    <Con>
                      <STitle>갤럭시 Z 플립3</STitle>
                      <SPrice>월 104,720원</SPrice>
                    </Con>
                    <Con>
                      <STitle>갤럭시 S22 Ultra</STitle>
                      <SPrice>월 116,030원</SPrice>
                    </Con>
                  </Top>
                  <Bottom>
                    <Con>
                      <STitle>갤럭시 A23</STitle>
                      <SPrice>월 6,1550원</SPrice>
                    </Con>
                    <Con>
                      <STitle>iPhone 13 Pro 256G</STitle>
                      <SPrice>월 130,260원</SPrice>
                    </Con>
                  </Bottom>
                </RightPro>
              </Product>
            </PropductCon>
            <PropductCon>
              <ProTitle>삼성</ProTitle>
              <Product>
                <LeftPro>
                  <STitle>갤럭시 S22</STitle>
                  <SPrice>월 98,560원</SPrice>
                </LeftPro>
                <RightPro>
                  <Top>
                    <Con>
                      <STitle>갤럭시 Z 플립3</STitle>
                      <SPrice>월 104,720원</SPrice>
                    </Con>
                    <Con>
                      <STitle>갤럭시 S22 Ultra</STitle>
                      <SPrice>월 116,030원</SPrice>
                    </Con>
                  </Top>
                  <Bottom>
                    <Con>
                      <STitle>갤럭시 A23</STitle>
                      <SPrice>월 6,1550원</SPrice>
                    </Con>
                    <Con>
                      <STitle>iPhone 13 Pro 256G</STitle>
                      <SPrice>월 130,260원</SPrice>
                    </Con>
                  </Bottom>
                </RightPro>
              </Product>
            </PropductCon>
            <PropductCon>
              <ProTitle>Apple</ProTitle>
              <Product>
                <LeftPro>
                  <STitle>갤럭시 S22</STitle>
                  <SPrice>월 98,560원</SPrice>
                </LeftPro>
                <RightPro>
                  <Top>
                    <Con>
                      <STitle>갤럭시 Z 플립3</STitle>
                      <SPrice>월 104,720원</SPrice>
                    </Con>
                    <Con>
                      <STitle>갤럭시 S22 Ultra</STitle>
                      <SPrice>월 116,030원</SPrice>
                    </Con>
                  </Top>
                  <Bottom>
                    <Con>
                      <STitle>갤럭시 A23</STitle>
                      <SPrice>월 6,1550원</SPrice>
                    </Con>
                    <Con>
                      <STitle>iPhone 13 Pro 256G</STitle>
                      <SPrice>월 130,260원</SPrice>
                    </Con>
                  </Bottom>
                </RightPro>
              </Product>
            </PropductCon>
          </ProductSlide>
        </ProductWrap>
      </ProductWrap>
    </Section>
  );
};

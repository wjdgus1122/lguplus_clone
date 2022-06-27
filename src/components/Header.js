import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faSearch,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div``;
const TopHeader = styled.div``;
const TopBtnWrap = styled.div``;
const TopBtn = styled.div``;
const BtmHeader = styled.div``;
const TextMenuWrap = styled.div``;
const BtmBtnWrap = styled.div``;

export const Header = () => {
  return (
    <SHeader>
      <TopHeader>
        <Link to="/">LOGO</Link>
        <TopBtnWrap>
          <TopBtn>개인</TopBtn>
          <TopBtn>기업</TopBtn>
          <TopBtn>소상공인</TopBtn>
        </TopBtnWrap>
      </TopHeader>
      <BtmHeader>
        <TextMenuWrap>
          <Link to="/product">모바일 기기</Link>
          <Link to="/price_1">모바일 요금제</Link>
          <Link to="/price_2">인터넷/IPTV</Link>
          <Link to="/">마이페이지</Link>
          <Link to="/">혜택</Link>
          <Link to="/">고객지원</Link>
          <Link to="/">#유플일상</Link>
        </TextMenuWrap>
        <BtmBtnWrap>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faStore} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </BtmBtnWrap>
      </BtmHeader>
    </SHeader>
  );
};

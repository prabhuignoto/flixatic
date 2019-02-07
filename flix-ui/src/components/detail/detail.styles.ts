import styled from "styled-components";

export const AttributeWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${p => (p.direction ? p.direction : "row")};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.5rem 0rem;
  &:not(:last-child) {
    border-bottom: 1px dotted #313131;
  }
`;

export const AttributeTitle = styled.span`
  text-transform: capitalize;
  color: #fff;
  margin-right: auto;
  color: #FFBF00;
  font-weight: 500;
  padding-left: 0.5rem;
`;
export const AttributeValue = styled.span`
  color: #fff;
  text-align: left;
  padding-right:0.5rem;
`;

export const ImdbWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #1d1d1d;
  border-radius: 4px;
  height: 280px;
  width: 100%;
  box-shadow:0 0 5px 1px rgba(0,0,0,0.4);
`;

export const DetailPopupBackdrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
`;

export const DetailPopupContainer = styled.div`
  width: 950px;
  min-height: 300px;
  position: relative;
`;

export const DetailPopupContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #272727;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.7);
  border-radius: 4px;
`;

export const DetailWrapperOne = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DetailWrapperTwo = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;



export const CloseButton = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  padding: 0;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  top: 0.5rem;
  right: -1.25rem;
  background: none;
`;

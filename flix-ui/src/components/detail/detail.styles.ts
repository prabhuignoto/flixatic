import styled from "styled-components";

export const AttributeWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${p => (p.direction ? p.direction : "row")};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.25rem 0;
  padding: 0.25rem 0rem;
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
  min-width: 200px;
  max-width: 350px;
  height: 280px;
  border: 1px solid #1d1d1d;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.7);
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
  min-width: 300px;
  max-width: 650px;
  min-height: 300px;
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
  align-items: center;
  justify-content: center;
`;
export const DetailWrapperTwo = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

export const PlotWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #FFBF00;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
  border-radius: 4px;
  border: 1px solid #3b3b3b;
  margin-top: 1rem;
`;

export const PlotHead = styled.header`
  font-size: 1.25rem;
  font-weight: 500;
  color: #000;
  width: 100%;
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const PlotBody = styled.div`
  color: #000;
  overflow: hidden;
  text-align: left;
  padding: 0.5rem;
`;

export const FlixWrapper = styled.div`
  padding: 0.5rem;
  position: relative;
  min-height: 250px;
`;

export const FlixImageWrapper = styled.div`
  min-width: 250px;
  height: 280px;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
  box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.75);
  border: 2px solid #FFBF00;
`;

export const FlixImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 0% 0%;
`;

export const FlixTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: left;
  margin-left: 0.5rem;
`;

export const FlixStarsWrapper = styled.div`
  background: rgba(0,0,0,0.9);
  padding: 0.2rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width:70%;
`;

export const CloseButton = styled.button`
  background: rgba(0,0,0,0.7);
  border: none;
  width: 3rem;
  height: 3rem;
  padding: 0;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
`;

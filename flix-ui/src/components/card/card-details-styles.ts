import styled from "styled-components";
import Posed from "react-pose";

export const Runtime = styled.span`
  color: #fff;
  margin: 0.25rem 0;
  font-size: 0.8rem;
  `;
export const Released = styled.span`
  color: #fff;
  margin: 0.25rem 0;
  font-size: 0.8rem;
`;

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const MoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  padding: 0.2rem 0.25rem;
  margin-top: 0.25rem;
`;

export const PosedMoreDetails = Posed(MoreDetails)({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

export const Details = styled.div<{ show: boolean }>`
  padding: 0.5rem 0.25rem;
  position: absolute;
  left: 0;
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  background: ${p => (p.show ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.9)")};
  top: 0px;
  z-index: 10;
`;

export const PosedDetails = Posed(Details)({
  show: {
    minHeight: "95%",
  },
  hide: {
    minHeight: "25px"
  }
});

export const Title = styled.span`
  color: #0080FF;
  text-align: left;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Synopsis = styled.span`
  color: #fff;
  text-align: left;
  margin: 0.25rem 0;
  font-size: 0.8rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  position: absolute;
  top: 0.25rem;
  right: 0.2rem;
  cursor: pointer;
  outline: none;
`;

export const ExpandButton = styled(Button)({
  marginLeft: "auto",
  width: "1.25rem",
  height: "1.25rem",
  marginTop: "0.25rem"
});

import styled from "styled-components";

export const FlixWrapper = styled.div`
  position: relative;
  min-height: 250px;
  flex: 1;
  align-self: center;
`;

export const FlixImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75);
`;

export const FlixImageLoadWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
`;

export const FlixImage = styled.img<{ loading: boolean }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 0% 0%;
  display: ${p => (p.loading ? "none" : "block")};
  border-radius: 3px;
`;

export const FlixTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #ffbf00;
  text-align: left;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
`;

export const FlixStarsWrapper = styled.div`
  padding: 0.2rem;
  width: 150px;
`;

export const FlixImageSliders = styled.div`
  position: relative;
`;

export const FlixImageControls = styled.ul`
  list-style: none;
  padding: 0.2rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 1rem;  
  height: 30px;
  width: 100px;
`;

export const FlixImageControl = styled.li<{selected: boolean}>`
  background: ${p => p.selected ? "#fff": "#000"};
  border: 1px solid #fff;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;
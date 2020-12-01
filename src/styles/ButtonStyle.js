import { Link } from "gatsby"
import styled from "styled-components"

export const Btn = styled(Link)`
  background: ${({ primary }) => (primary ? "#f26a2e" : "#077bf1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  border-radius: ${({ rounded }) => (rounded ? "50px" : "none")};
  transition: 0.3s !important;

  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translateY(-2px);
  }
`

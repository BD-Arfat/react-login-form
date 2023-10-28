import styled from "styled-components";

const Button = ({content}) => {
    return (
       <StyleButton>{content}</StyleButton>
    );
};


const StyleButton = styled.button`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export default Button;
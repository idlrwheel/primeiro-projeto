import styled from "styled-components";

const Texto = styled.p`
color: ${props => props.CorDoTexto|| slategrey};
font-size: 16px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export default Texto;
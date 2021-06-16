import styled from "styled-components";
import Search from "./components/search";
import "./styles.css";

const Title = styled.p`
  font-size: 2rem;
  color: #eeeeee;
  letter-spacing: 0.15em;
  line-height: 2em;
`;

export default function App() {
  return (
    <div className="App">
      <Title>Expanding Search Box</Title>
      <Search />
    </div>
  );
}

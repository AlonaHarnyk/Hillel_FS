import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: peachpuff;
  border: 1px solid black;
`;

export const ContactName = styled.p`
  margin: 0 0 10px 0;
  font-weight: 700;
`;

export const StyledListItem = styled(ListItem)`
  color: blue;
`;

export const Status = styled.p<{ hasWork: boolean }>`
  text-decoration: underline;
  color: ${({ hasWork }) => (hasWork ? "red" : "green")};
`;

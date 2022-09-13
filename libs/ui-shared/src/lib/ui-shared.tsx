import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiSharedProps {}

const StyledUiShared = styled.div`
  color: pink;
`;

export function UiShared(props: UiSharedProps) {
  return (
    <StyledUiShared>
      <h1>Welcome to UiShared!</h1>
    </StyledUiShared>
  );
}

export default UiShared;

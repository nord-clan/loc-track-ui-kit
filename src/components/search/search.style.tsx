import styled from '@emotion/styled';
import { shadeColor } from '#/helpers/shade-color';

interface ISearchStyledProps {
  isVisible: boolean;
}
export const SearchStyled = styled('div')<ISearchStyledProps>`
  position: absolute;
  top: 0;
  left: calc(50% - 200px);
  font-size: 1rem;

  transform: translateY(
    ${({ isVisible }) =>
      !isVisible
        ? `
        -50px
        `
        : `
        0
        `}
  );
  opacity: ${({ isVisible }) =>
    !isVisible
      ? `
        0
        `
      : `
        1
        `};

  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);

  width: 400px;

  .input {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 10px;
    padding: 2px 8px;
    z-index: 20;

    background-color: ${({ theme }) => theme.palette.bg.headerBlur};
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    backdrop-filter: blur(8px) saturate(180%);
    border: 2px solid ${({ theme }) => theme.palette.border.header};

    border-radius: 14px;

    height: 30px;

    > svg {
      color: ${({ theme }) => theme.palette.border.content};
      cursor: pointer;
    }

    > input {
      width: 100%;
      background-color: transparent;
      outline: none;
      border: none;
      color: ${({ theme }) => theme.palette.color.header};
    }
  }

  .settings {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    border-radius: 14px 14px 4px 4px;
    width: 100%;

    padding-top: 30px;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.border.content};

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 5px 0;

      .items {
        padding: 4px 10px;
        border-left: 2px solid transparent;
        font-size: 1rem;
        color: ${({ theme }) => theme.palette.color.subText};

        &:hover {
          color: ${({ theme }) => theme.palette.color.text};
          background-color: ${({ theme }) => shadeColor(theme.palette.bg.mainContent, -10)};
          border-left: 2px solid ${({ theme }) => theme.palette.bg.highlight};
          cursor: pointer;
        }
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

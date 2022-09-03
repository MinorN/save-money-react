import styled from 'styled-components';

const TagsSection = styled.section`
  background-color: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      background-color: #d9d9d9;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }

  > button {
    background: none;
    border: none;
    color: #666;
    padding: 2px 4px;
    margin-top: 8px;
    border-bottom: 1px solid #333;
  }
`;

export default TagsSection
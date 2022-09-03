import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background-color: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
    const categoryMap = {
        '-': '支出',
        '+': '收入'
    };
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-', '+']);
    const [category, setCategory] = useState<string>('-');

    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? 'selected' : ''}
                        onClick={() => setCategory(c)} key={c}>{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    );

};

export default CategorySection;
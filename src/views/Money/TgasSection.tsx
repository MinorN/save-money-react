import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
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

      &.selected {
        background-color: #f60;
      }
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

type Props = {
    value: number[],
    onChange: (selected: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
    const {tags, addTag} = useTags();

    const selectedTagIds = props.value;

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            // 如果tag被选中，复制所有没被选中的tag 作为新的selectedTags
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };
    const getClass = (tagId: number) => {
        return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    };
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => {
                        onToggleTag(tag.id);
                    }} className={getClass(tag.id)}>
                        {tag.name}
                    </li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    );
};

export default TagsSection;
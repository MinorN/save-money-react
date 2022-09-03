import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none
    }
  }
`;

const NoteSection: React.FC = () => {
    const [note, setNote] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (inputRef.current !== null) {
            setNote(inputRef.current.value);
        }
    };
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder={'请在这里输入备注'} ref={inputRef} defaultValue={note} onBlur={onBlur}/>
            </label>
        </Wrapper>
    );
};

export default NoteSection;
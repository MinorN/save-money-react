import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Icon from './Icon';
import React from 'react';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  > ul {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;

        &.selected {
          color: red;

          .icon {
            fill: red;
          }
        }

        .icon {
          width: 24px;
          height: 24px;
        }
      }


    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected"><Icon name={'tag'}/>标签</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected"><Icon name={'money'}/>记账</NavLink>
                </li>
                <li>
                    <NavLink to="/Statistics" activeClassName="selected"><Icon name={'chart'}/>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;
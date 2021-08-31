import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('https://acct.global/wp-content/uploads/2021/01/bg-form.jpg');
  background-position: center;
  background-size: cover;
  padding: 6em 0em 6em 0em;
  align-items: center;
  margin-left: -102.5px;
  margin-right: -102.5px;
  padding-left: 102.5px;
  padding-right: 102.5px;
  border-left: 0px;
  border-right: 0px;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.form`
  box-sizing: border-box;
  width: calc(50% - (0.5 * 60px));
  display: block;
`;
export const Label = styled.label`
  display: block;
  color: #292929;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  border-radius: 3px;
  width: 100%;
  margin-bottom: 5px;
  color: #292929;
  resize: none;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 6%);
  line-height: normal;
`;
export const Button = styled.button`
  padding: 6px 15px 5px;
  background: #fff;
  border: 2px solid #5974c7;
  margin-top: 10px;
  color: #5974c7;
  text-transform: capitalize;
  width: auto;
  font-size: 100%;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
`;

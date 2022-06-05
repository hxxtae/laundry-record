import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ErrorMessage, InputTitles, KeyboardBox } from '../../../../components';
import { colors, includes, inputStyle } from '../../../../styles';
import { inputMessage, regexrObj } from '../../../../util';

interface ICustomerDong {
  searchActive: boolean;
}

function CustomerDong({ searchActive }: ICustomerDong) {
  const [selectAct, setSelectAct] = useState(false);
  const { register, formState: { errors }, setValue } = useFormContext();

  return (
    <InputBox>
      <InputTitles title='동' des='주소의 동 수를 입력해주세요.' />
      <Input
        readOnly
        onClick={() => setSelectAct((prev) => !prev)}
        err={errors.dong?.message}
        autoComplete="off"
        placeholder="동입력"
        {...register('dong', {
          required: !searchActive ? inputMessage.required : false,
          maxLength: { value: 5, message: inputMessage.maxLen(5) },
          minLength: { value: 2, message: inputMessage.minLen(1) },
          pattern: { value: regexrObj.notSpaceAndSpecial, message: "숫자만 입력가능합니다." },
      })}/>
      <ErrorMessage absolute={true} message={errors.dong?.message} />

      <AnimatePresence>
        {selectAct && <KeyboardBox value={'dong'} setValue={setValue} />}
      </AnimatePresence>
    </InputBox>
  )
}

export default CustomerDong;

const InputBox = styled.div`
  position: relative;
  ${includes.flexBox('flex-start', 'center')}
  flex-direction: column;
  width: 160px;
  margin-right: 10px;
  z-index: 10;
`;

const Input = styled.input<{err?: string}>`
  ${inputStyle.base}
  background-color: ${(props) => props.theme.inputColor};
  border-color: ${(props) => props.err ? `${colors.red}` : `${props.theme.borderColor}` };
  color: ${(props) => props.theme.textColor};
`;
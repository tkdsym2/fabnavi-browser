import styled from 'styled-components';
import { colors } from '../../../common/colors';
import { buttonProperties } from '../../../common/buttonProperties';

export const AnnotationWordsWrapper = styled.div`
  display: block;
`;

export const EditFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 544px;
  overflow: scroll;
`;

export const ButtonFrame = styled.div`
  display: flex;
`;

export const WordInput = styled.input.attrs({
  type: 'text'
})`
  width: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 30px;
  box-shadow: none;
  background: none;
  padding-left: 5px;
  font-size: 16px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.objectColor || 'black'};
`;

export const AcceptCheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-left: 5px;
  margin-right: 15px;
`;

export const AnnotationButton = styled.button`
  font-size: 12px;
  border-style: none;
  margin-top: 10px;
  margin-right: 30px;
  ${buttonProperties({
    width: 100,
    height: 35,
    color: 'white',
    backgroundColor: colors.button.green
  })};
`;

export const ClearButton = styled.button`
  font-size: 12px;
  border-style: none;
  margin-top: 10px;
  margin-right: 20px;
  ${buttonProperties({
    width: 100,
    height: 35,
    color: 'white',
    backgroundColor: colors.button.gray
  })};
`;

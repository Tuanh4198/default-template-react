import { useDispatch, useSelector } from 'react-redux';
import { useHomeSlice } from 'src/screens/home/slice/hooks';
import { selectCounter } from 'src/screens/home/slice/selectors';

export const useCalcular = () => {
  const dispatch = useDispatch();
  const { actions } = useHomeSlice();

  const counter = useSelector(selectCounter);

  const handlePlus = () => {
    dispatch(actions.increase());
  };

  const handleMinus = () => {
    dispatch(actions.decrease());
  };

  return {
    handlePlus,
    handleMinus,
    counter,
  };
};

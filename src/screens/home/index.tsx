import React from 'react';
import { Translate } from '../../locales/Translate';
import { Button, Flex } from '@mantine/core';
import { Plus, Minus } from '@phosphor-icons/react';
import { Screens } from '..';
import { useCalcular } from 'src/screens/home/hooks/useCalcular';

export const Home = () => {
  const { counter, handlePlus, handleMinus } = useCalcular();

  return (
    <div>
      <p>
        <Translate contentKey='Home page' ns={Screens.HOME} />
      </p>
      <Flex gap='15px' align='center' mt='sm'>
        <Button onClick={handlePlus} size='compact-sm'>
          <Plus size={20} />
        </Button>
        {counter}
        <Button onClick={handleMinus} size='compact-sm'>
          <Minus size={20} />
        </Button>
      </Flex>
    </div>
  );
};

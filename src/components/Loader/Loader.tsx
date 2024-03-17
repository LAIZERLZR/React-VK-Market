import React from 'react';
import { PanelSpinner } from '@vkontakte/vkui';

const Loader = () => {
  return (
    <div>
      <PanelSpinner>Данные загружаются, пожалуйста, подождите...</PanelSpinner>
    </div>
  );
};

export default Loader;

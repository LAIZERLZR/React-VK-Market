import { Div, PanelSpinner } from '@vkontakte/vkui';

const Loader = () => {
  return (
    <Div>
      <PanelSpinner>Данные загружаются, пожалуйста, подождите...</PanelSpinner>
    </Div>
  );
};

export default Loader;

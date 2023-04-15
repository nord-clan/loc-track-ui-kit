import type { IModalController } from '../../src';
import type { Meta, StoryFn } from '@storybook/react';
import { useRef } from 'react';
import { AiOutlineInfoCircle, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import { BiErrorAlt } from 'react-icons/bi';
import { FcCustomerSupport } from 'react-icons/fc';
import { GiConfirmed } from 'react-icons/gi';
import { Modal } from '../../src';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal
};

export default meta;

//* - Modal ---------------------------------------------------------------- *//

const Template: StoryFn = () => {
  const modalRef = useRef<IModalController>();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <button
        onClick={() =>
          modalRef.current.showConfirm({ message: <div>123</div>, Icon: GiConfirmed })
        }>
        Confirm
      </button>
      <button onClick={() => modalRef.current.showError({ message: 'Error', Icon: BiErrorAlt })}>
        Error
      </button>
      <button
        onClick={() =>
          modalRef.current.showInfo({ message: 'showInfo', Icon: AiOutlineInfoCircle })
        }>
        Info
      </button>
      <button
        onClick={() =>
          modalRef.current.showSuccess({ message: 'showSuccess', Icon: AiOutlineCheckCircle })
        }>
        Success
      </button>
      <button
        onClick={() =>
          modalRef.current.showWarning({ message: 'showWarning', Icon: AiOutlineWarning })
        }>
        Warning
      </button>
      <button
        onClick={() =>
          modalRef.current.showCustomDialog({
            Icon: FcCustomerSupport,
            message: 'showCustomDialog',
            buttons: [
              { onClick: () => modalRef.current.hide(), text: 'ok?' },
              { onClick: () => modalRef.current.hide(), text: 'ok?' },
              { onClick: () => modalRef.current.hide(), text: 'ok?' }
            ]
          })
        }>
        Custom
      </button>
      <button
        onClick={() => {
          modalRef.current.showLoader();
          setTimeout(() => modalRef.current.hide(), 1000);
        }}>
        Confirm
      </button>
      <Modal controllerRef={modalRef} />
    </div>
  );
};

export const Default = Template.bind({});

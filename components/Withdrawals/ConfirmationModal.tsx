'use client'
import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

const ConfirmationModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Ok"
        cancelText="Cancel"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};

// const App = () => {
//   const [modal, contextHolder] = Modal.useModal();

//   const confirm = () => {
//     modal.confirm({
//       title: 'Confirm',
//       icon: <ExclamationCircleOutlined />,
//       content: 'Bla bla ...',
//       okText: 'Ok',
//       cancelText: 'Cancel',
//     });
//   };

//   return (
//     <>
//       <Space>
//         <ConfirmationModal />
//         <Button onClick={confirm}>Confirm</Button>
//       </Space>
//       {contextHolder}
//     </>
//   );
// };

export default ConfirmationModal;


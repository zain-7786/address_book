import React from 'react';
import { Modal } from 'antd';

function DetailModal({ show, handleOk, handleCancel}) {
    //const [show, setShow] = useState(false);

    // const showModal = () => {
    //     setShow(true);
    // }
    // const handleOk = () => {
    //     setShow(false);
    // }
    // const handleCancel = () => {
    //     setShow(false);
    // }
    return (
            <Modal title="User Details" visible={show} onOk={handleOk} onCancel={handleCancel}>
                <p>Name: </p>
                <p>Age: </p>
                <p>Email: </p>
            </Modal>
    )
}

export default DetailModal

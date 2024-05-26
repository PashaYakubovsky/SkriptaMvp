import { ISeries } from "@/models/Series";
import { Modal } from "@geist-ui/core";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalRefreshEpisode = ({
    open,
    close,
    scriptId,
    onUpdate,
    refreshId,
}: {
    open: boolean;
    close: () => void;
    scriptId: string;
    onUpdate?: () => void;
    refreshId: string;
}) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            if (!scriptId) {
                toast.error("Script not found");
                throw new Error("Script not found");
            }

            await axios.post(`/api/series/${scriptId}/${refreshId}`);
            setLoading(false);
            toast.success("Script updated");
            onUpdate?.();
        } catch (err) {
            toast.error("Failed to delete episode");
            setLoading(false);
        }
    };

    return (
        <Modal visible={open} onClose={close}>
            <Modal.Title className="!w-full">
                Are you sure you want to recreate this episode?
            </Modal.Title>
            <Modal.Content className="!w-full">
                All episodes what was created after this episode will be permanently deleted.
            </Modal.Content>

            <Modal.Action
                loading={loading}
                placeholder={undefined}
                passive
                onClick={async () => {
                    await handleDelete();
                    close();
                }}>
                Recreate
            </Modal.Action>

            <Modal.Action
                placeholder={undefined}
                passive
                onClick={async () => {
                    close();
                }}>
                Cancel
            </Modal.Action>
        </Modal>
    );
};

export default ModalRefreshEpisode;

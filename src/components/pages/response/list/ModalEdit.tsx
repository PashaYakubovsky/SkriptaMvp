import { ISeries } from "@/models/Series";
import { Input, Modal } from "@geist-ui/core";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ModalEdit = ({
    open,
    close,
    script,
    onUpdate,
}: {
    open: boolean;
    close: () => void;
    script: ISeries | null;
    onUpdate?: () => void;
}) => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const handleUpdate = async () => {
        try {
            setLoading(true);
            if (!script?.id) {
                toast.error("Script not found");
                throw new Error("Script not found");
            }
            await axios.put(`/api/series/${script.id}`, {
                name,
            });
            setLoading(false);
            toast.success("Script updated");
            onUpdate?.();
        } catch (err) {
            toast.error("Failed to update script");
            setLoading(false);
        }
    };

    useEffect(() => {
        if (script) {
            setName(script.name ?? "");
        }
    }, [script]);

    return (
        <Modal visible={open} onClose={close}>
            <Modal.Title className="!w-full">
                <Input
                    className="!w-[20rem]"
                    type="default"
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="eg. My Series Name"
                    initialValue={script?.name ?? ""}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    crossOrigin={undefined}
                />
            </Modal.Title>

            <Modal.Action
                loading={loading}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}
                passive
                onClick={async () => {
                    await handleUpdate();
                    close();
                }}>
                Edit
            </Modal.Action>
            <Modal.Action
                type="success"
                onClick={() => {
                    router.push(`/response/${script?.id}`);
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}>
                Go to Script
            </Modal.Action>
        </Modal>
    );
};

export default ModalEdit;

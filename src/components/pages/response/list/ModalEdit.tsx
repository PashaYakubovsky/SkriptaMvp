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
    type,
}: {
    open: boolean;
    close: () => void;
    script: ISeries | null;
    onUpdate?: () => void;
    type?: "edit" | "delete";
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

    const handleDelete = async () => {
        try {
            setLoading(true);
            if (!script?.id) {
                toast.error("Script not found");
                throw new Error("Script not found");
            }
            await axios.delete(`/api/series/${script.id}`);
            setLoading(false);
            toast.success("Script deleted");
            onUpdate?.();
        } catch (err) {
            toast.error("Failed to delete script");
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
                {type === "edit" && (
                    <Input
                        className="!w-[20rem]"
                        type="default"
                        label="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="eg. My Series Name"
                        initialValue={script?.name ?? ""}
                        crossOrigin={undefined}
                    />
                )}
                {type === "delete" && "Delete Script"}
            </Modal.Title>

            <Modal.Action
                loading={loading}
                placeholder={undefined}
                passive
                onClick={async () => {
                    if (type === "edit") {
                        await handleUpdate();
                    }
                    if (type === "delete") {
                        await handleDelete();
                    }
                    close();
                }}>
                {type === "edit" ? "Update" : "Delete"}
            </Modal.Action>
            {type === "edit" && (
                <Modal.Action
                    onClick={() => {
                        const userId = localStorage.getItem("userId");
                        router.push(`/response?seriesId=${script?.id}&userId=${userId}`);
                    }}
                    placeholder={undefined}>
                    Go to Script
                </Modal.Action>
            )}
        </Modal>
    );
};

export default ModalEdit;

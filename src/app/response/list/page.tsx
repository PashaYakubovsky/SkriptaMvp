"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@geist-ui/core";
import { ISeries } from "@/models/Series";
import { VirtuosoGrid } from "react-virtuoso";
import toast from "react-hot-toast";
import { getSeries } from "@/lib/api";
import dynamic from "next/dynamic";
import gridComponents from "@/components/pages/response/list/GridComponents";

const ModalEdit = dynamic(() => import("@/components/pages/response/list/ModalEdit"), {
    ssr: false,
});
const ItemWrapper = dynamic(() => import("@/components/pages/response/list/ItemWrapper"), {
    ssr: false,
});

const SeriesList = () => {
    const [config, setConfig] = useState<{
        series: ISeries[];
        popupOpen: boolean;
        selectedScript: ISeries | null;
        loading: boolean;
    }>({
        series: [],
        popupOpen: false,
        selectedScript: null,
        loading: false,
    });
    useEffect(() => {
        document.body.style.overflow = "hidden";

        const init = async () => {
            const userId = localStorage.getItem("userId") ?? "";
            try {
                setConfig({ ...config, loading: true });
                const series = await getSeries({ userId });
                setConfig({ ...config, series, loading: false });
            } catch (error) {
                toast.error("Failed to fetch series");
                setConfig({ ...config, loading: false });
            }
        };
        init();

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div>
            <header className="text-center text-white bg-black py-5">
                <Text h2>Series</Text>
            </header>

            <div className="py-5">
                <VirtuosoGrid
                    style={{ height: 700, margin: "0 auto" }}
                    totalCount={config.series.length}
                    components={gridComponents as any}
                    itemContent={index => {
                        const script = config.series[index];
                        return (
                            <ItemWrapper
                                loading={config.loading}
                                onClick={() => {
                                    setConfig({
                                        ...config,
                                        popupOpen: true,
                                        selectedScript: config.series[index],
                                    });
                                }}>
                                {script?.name ?? script?.id}
                            </ItemWrapper>
                        );
                    }}
                />
            </div>

            <ModalEdit
                open={config.popupOpen}
                close={() => {
                    setConfig({ ...config, popupOpen: false });
                }}
                script={config.selectedScript}
                onUpdate={() => {
                    setConfig({ ...config, loading: true });
                    getSeries({ userId: localStorage.getItem("userId") ?? "" })
                        .then(series => {
                            setConfig(state => ({ ...state, series, loading: false }));
                        })
                        .catch(() => {
                            setConfig({ ...config, loading: false });
                        });
                }}
            />
        </div>
    );
};

export default SeriesList;

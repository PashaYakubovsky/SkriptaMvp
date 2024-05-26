"use client";
import React, { useEffect, useState } from "react";
import { Text, Input } from "@geist-ui/core";
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
        filteredSeries: ISeries[];
        popupOpen: boolean;
        selectedScript: ISeries | null;
        loading: boolean;
        popupType: "edit" | "delete";
    }>({
        series: [],
        filteredSeries: [],
        popupOpen: false,
        popupType: "edit",
        selectedScript: null,
        loading: false,
    });
    useEffect(() => {
        const init = async () => {
            const userId = localStorage.getItem("userId") ?? "";
            try {
                setConfig({ ...config, loading: true });
                const series = await getSeries({ userId });
                setConfig({ ...config, series, loading: false, filteredSeries: series });
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
            <div className="w-[15rem] mt-4 mx-auto">
                <Input
                    onChange={e => {
                        const value = e.target.value.toLowerCase();
                        setConfig({
                            ...config,
                            filteredSeries: config.series.filter(script => {
                                const pattern = new RegExp(value, "i");
                                return (
                                    pattern.test(script?.name || "") ||
                                    pattern.test(script?.id || "")
                                );
                            }),
                        });
                    }}
                    placeholder="Search"
                    width="100%"
                    crossOrigin={undefined}
                />
            </div>

            <div className="py-5">
                <VirtuosoGrid
                    style={{ height: window.innerHeight - 200, display: "flex" }}
                    totalCount={config.filteredSeries.length}
                    components={gridComponents as any}
                    itemContent={index => {
                        const script = config.filteredSeries[index];
                        return (
                            <ItemWrapper
                                onDelete={() => {
                                    setConfig({
                                        ...config,
                                        popupOpen: true,
                                        popupType: "delete",
                                        selectedScript: script,
                                    });
                                }}
                                loading={config.loading}
                                onClick={() => {
                                    setConfig({
                                        ...config,
                                        popupOpen: true,
                                        popupType: "edit",
                                        selectedScript: script,
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
                type={config.popupType}
                script={config.selectedScript}
                onUpdate={() => {
                    setConfig({ ...config, loading: true });
                    getSeries({ userId: localStorage.getItem("userId") ?? "" })
                        .then(series => {
                            setConfig(state => ({
                                ...state,
                                series,
                                loading: false,
                                filteredSeries: series,
                            }));
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

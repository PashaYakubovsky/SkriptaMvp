import styles from "./Hero.module.scss";
import React, { useRef, useMemo, memo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";
import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";

const ParticlesShader = memo(() => {
    const renderRef =
        useRef<
            THREE.Points<
                THREE.BufferGeometry<THREE.NormalBufferAttributes>,
                THREE.Material | THREE.Material[],
                THREE.Object3DEventMap
            >
        >(null);
    const mousePos = useRef({ x: 0, y: 0, z: 0 });
    const planeRef =
        useRef<
            THREE.Mesh<
                THREE.PlaneGeometry,
                THREE.ShaderMaterial | THREE.MeshBasicMaterial | THREE.MeshLambertMaterial
            >
        >(null);

    const heroMaterial = useMemo(
        () => ({
            side: THREE.DoubleSide,
            uniforms: {
                uColor: new THREE.Uniform(new THREE.Color("black")),
                uMouse: new THREE.Uniform(new THREE.Vector3(-150, -150, 0)),
                uTime: new THREE.Uniform(0),
                uPixelRatio: new THREE.Uniform(window.devicePixelRatio),
                uSize: new THREE.Uniform(1),
                uResolution: new THREE.Uniform(
                    new THREE.Vector2(window.innerWidth, window.innerHeight)
                ),
                uDisplacementTexture: new THREE.Uniform(null),
                uAngleScale: new THREE.Uniform(1.2),
                uDisplacementScale: new THREE.Uniform(0.1),
                uDisplacementSpeed: new THREE.Uniform(1),
                uRandomScale: new THREE.Uniform(true),
            },
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        }),
        []
    );

    const heroGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        const count = 2000;
        const gap = 0.8; // Gap between particles
        const aspectRatio = window.innerWidth / window.innerHeight; // User window screen aspect ratio
        const rows = Math.floor(Math.sqrt(count / aspectRatio)); // Number of rows in the grid
        const cols = Math.ceil(count / rows); // Number of columns in the grid

        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);
        const intensities = new Float32Array(count);
        const angles = new Float32Array(count);
        const uvs = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            positions[i * 3 + 0] = (col - cols / 2) * gap;
            positions[i * 3 + 1] = (row - rows / 2) * gap;
            positions[i * 3 + 2] = -1;
            scales[i] = 0.1;
            intensities[i] = Math.random();
            angles[i] = Math.random() * Math.PI * 2;

            const u = col / (cols - 1);
            const v = row / (rows - 1);
            uvs[i * 2 + 0] = u;
            uvs[i * 2 + 1] = v;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
        geometry.setAttribute("aIntensity", new THREE.BufferAttribute(intensities, 1));
        geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
        geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

        return geometry;
    }, []);

    useFrame(({ clock }) => {
        // update the mouse position
        heroMaterial.uniforms.uMouse.value.x = mousePos.current.x;
        heroMaterial.uniforms.uMouse.value.y = mousePos.current.y;
        heroMaterial.uniforms.uMouse.value.z = mousePos.current.z;
        // update the time
        heroMaterial.uniforms.uTime.value = clock.elapsedTime;
        // update size
        heroMaterial.uniforms.uSize.value = 1;

        /**
         * Displacement
         */

        // Fade out
        if (displacement.current.context) {
            displacement.current.context.globalCompositeOperation = "source-over";
            displacement.current.context.globalAlpha = 0.02;
            displacement.current.context.fillRect(
                0,
                0,
                displacement.current.canvas!.width,
                displacement.current.canvas!.height
            );
        }

        // Speed alpha
        if (!displacement.current.canvasCursor) return;
        const cursorDistance = displacement.current.canvasCursorPrevious!.distanceTo(
            displacement.current.canvasCursor
        );
        displacement.current.canvasCursorPrevious!.copy(displacement.current.canvasCursor);
        const alpha = Math.min(cursorDistance * 0.05, 1);

        // Draw glow
        if (displacement.current.context && displacement.current.canvasCursor) {
            const glowSize = displacement.current.canvas!.width * 0.4;
            displacement.current.context.globalCompositeOperation = "lighten";
            displacement.current.context.globalAlpha = alpha;
            displacement.current.context.drawImage(
                displacement.current.glowImage!,
                displacement.current.canvasCursor.x - glowSize * 0.5,
                displacement.current.canvasCursor.y - glowSize * 0.5,
                glowSize,
                glowSize
            );
        }

        // set the displacement texture
        heroMaterial.uniforms.uDisplacementTexture.value = displacement.current
            .texture as unknown as null;
        // Texture
        if (displacement.current.texture) displacement.current.texture.needsUpdate = true;
    });

    const displacement = useRef<
        Partial<{
            canvasCursor: THREE.Vector2;
            canvasCursorPrevious: THREE.Vector2;
            canvas: HTMLCanvasElement;
            context: CanvasRenderingContext2D;
            glowImage: HTMLImageElement;
            texture: THREE.CanvasTexture;
            screenCursor: THREE.Vector2;
        }>
    >({
        canvasCursor: new THREE.Vector2(999999),
        canvasCursorPrevious: new THREE.Vector2(999999),
    });

    useEffect(() => {
        // 2D canvas
        displacement.current.canvas = document.createElement("canvas");
        displacement.current.canvas.style.position = "fixed";
        displacement.current.canvas.style.objectFit = "contain";
        displacement.current.canvas.style.aspectRatio = "1/1";
        displacement.current.canvas.style.width = "320px";
        displacement.current.canvas.style.height = "320px";
        displacement.current.canvas.style.border = "1px solid white";
        displacement.current.canvas.style.borderRadius = "0.5rem";
        displacement.current.canvas.style.top = "16px";
        displacement.current.canvas.style.left = "16px";
        displacement.current.canvas.style.zIndex = "10";

        // Context
        displacement.current.context = displacement.current.canvas.getContext("2d")!;
        const context = displacement.current.context;
        // set aspect ratio
        displacement.current.canvas.width = 320;
        displacement.current.canvas.height = 320;

        context.fillRect(
            0,
            0,
            displacement.current.canvas.width,
            displacement.current.canvas.height
        );

        // Glow image
        displacement.current.glowImage = new Image();
        displacement.current.glowImage.src = "/glow.png";

        const canvasTexture = new THREE.CanvasTexture(displacement.current.canvas);
        displacement.current.texture = canvasTexture;

        // document.body.append(displacement.current.canvas);
        if (document.body.contains(displacement.current.canvas)) {
            displacement.current.canvas.remove();
        }
        // document.body.append(displacement.current.canvas);

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const handlePointerMove = (
            event:
                | PointerEvent
                | React.PointerEvent<HTMLCanvasElement>
                | React.PointerEvent<HTMLDivElement>
        ) => {
            if (!displacement.current.screenCursor)
                displacement.current.screenCursor = new THREE.Vector2();
            displacement.current.screenCursor.x = (event.clientX / sizes.width) * 2 - 1;
            displacement.current.screenCursor.y = -(event.clientY / sizes.height) * 2 + 1;
        };
        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            displacement.current.canvas!.remove();
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <>
            <group>
                <mesh
                    onClick={() => {
                        // create waves in canvas 2d and pass it to the shader
                        const context = displacement.current.context;
                        if (!context) return;
                        // Draw glow
                        const glowSize = displacement.current.canvas!.width * 0.4;
                        context.globalCompositeOperation = "lighten";
                        context.globalAlpha = 1;
                        context.drawImage(
                            displacement.current.glowImage!,
                            displacement.current.canvasCursor!.x - glowSize * 0.5,
                            displacement.current.canvasCursor!.y - glowSize * 0.5,
                            glowSize,
                            glowSize
                        );
                    }}
                    ref={planeRef}
                    onPointerMove={e => {
                        // update the mouse position
                        mousePos.current.x = e.point.x;
                        mousePos.current.y = e.point.y;
                        mousePos.current.z = e.point.z;

                        // update the mouse position
                        heroMaterial.uniforms.uMouse.value.x = e.point.x;
                        heroMaterial.uniforms.uMouse.value.y = e.point.y;
                        heroMaterial.uniforms.uMouse.value.z = e.point.z;

                        // if (!displacement.current.canvas) return;
                        if (!displacement.current.canvasCursor)
                            displacement.current.canvasCursor = new THREE.Vector2();
                        // canvas cursor

                        displacement.current.canvasCursor.x =
                            e.uv!.x * displacement.current.canvas!.width;
                        displacement.current.canvasCursor.y =
                            (1 - e.uv!.y) * displacement.current.canvas!.height;
                    }}
                    onPointerOut={() => {
                        // update the mouse position
                        heroMaterial.uniforms.uMouse.value.x = -150;
                        heroMaterial.uniforms.uMouse.value.y = -150;
                        heroMaterial.uniforms.uMouse.value.z = 0;
                    }}
                    position={[0, 0, -1]}
                    rotation={[0, 0, 0]}
                    matrixAutoUpdate={true}>
                    <planeGeometry attach="geometry" args={[40, 20]} />
                    <meshBasicMaterial
                        attach="material"
                        color={new THREE.Color("red")}
                        visible={false}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                <points
                    // rotate 180 degrees
                    rotation={[0, 0, Math.PI]}
                    ref={renderRef}
                    geometry={heroGeometry}
                    position={[0, 0, -1]}
                    scale={[1, 1, 1]}>
                    <shaderMaterial attach="material" {...heroMaterial} />
                </points>
            </group>
        </>
    );
});

const Hero = () => {
    return (
        <Canvas className={styles.hero}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
            />
            <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={40} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

            <ParticlesShader />
        </Canvas>
    );
};

export default Hero;

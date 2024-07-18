"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { proxy, useSnapshot } from "valtio";
import { TwitterPicker } from "react-color";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import Services from "@/components/services";
import ArrowBottom from "../assets/icons/Arrow-Bottom-light.svg";

const state = proxy({
  current: null,
  items: {
    laces: "#000",
    mesh: "#e6be43",
    caps: "#ccc",
    inner: "#ccc",
    sole: "#aaa",
    stripes: "#000",
    band: "#000",
    patch: "#000",
  },
});

export default function CustomShoe() {
  const [defaultSize, setDefaultSize] = useState("38");
  const [shoeData, setShoeData] = useState(null);

  function Picker() {
    const snap = useSnapshot(state);

    useEffect(() => {
      setShoeData(snap.items[snap.current]);
    }, [snap]);

    return (
      <div
        style={{ display: snap.current ? "block" : "none" }}
        className="absolute bottom-0 left-[1/2]"
      >
        <TwitterPicker
          color={snap.items[snap.current]}
          onChangeComplete={(color) => (state.items[snap.current] = color.hex)}
        />
      </div>
    );
  }

  const ColorComponent = (title: string, color: string) => {
    return (
      <div className="flex align-center justify-start mt-4 w-full xl:w-3/6">
        <div
          className="xl:w-6 w-4 xl:h-6 h-4 rounded-full shadow-md ml-2"
          style={{
            background: color,
          }}
        ></div>
        <h5 className="text-sm xl:text-md">{title}</h5>
      </div>
    );
  };

  return (
    <>
      <div className="h-full min-h-[90vh] relative flex xl:flex-row flex-col">
        <div className="xl:order-1 flex-[1] flex flex-col justify-between xl:pr-4 px-2 pb-20 pt-6">
          <div>
            <p className="text-xs xl:text-lg bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-xl w-full p-3">
              با کلیک روی هر بخش از کفش، می‌توانید رنگ موردنظر خود را اعمال
              کنید.
            </p>
          </div>
          <div className="mt-7">
            رنگ‌های انتخاب شده:
            <div className="grid xl:flex grid-cols-2 xl:grid-cols-1 items-start flex-col">
              {ColorComponent(" بدنه کفش", state.items.mesh)}
              {ColorComponent(" بندهای کفش", state.items.laces)}
              {ColorComponent(" بندهای بدنه کفش", state.items.band)}
              {ColorComponent(" سوراخ بندهای کفش", state.items.caps)}
              {ColorComponent(" داخل کفش", state.items.inner)}
              {ColorComponent(" کفه کفش", state.items.sole)}
              {ColorComponent(" اشکال کناره کفش", state.items.stripes)}
              {ColorComponent(" آرم پشت کفش", state.items.patch)}
            </div>
          </div>
        </div>
        <div className="order-first xl:order-2 flex-[2]">
          <h6 className="absolute left-[50%] top-[7%] lg:top-[15%] text-6xl lg:text-9xl font-[900] -translate-x-2/4 opacity-[.1]">
            آدیــــــداس
          </h6>
          <div className="relative h-[300px] xl:h-full flex justify-center cursor-pointer">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Shoe />
              <Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
              <ContactShadows
                position={[0, -0.8, 0]}
                opacity={0.25}
                scale={10}
                blur={1.5}
                far={0.8}
              />
              <OrbitControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
            <Picker />
          </div>
        </div>
        <div className="xl:order-3 flex-[1] flex flex-col justify-end xl:pl-4 px-2 pb-10">
          <h1 className="text-4xl">کتانی مدل DX9016</h1>
          <div className="mt-10">
            انتخاب سایز:
            <div className="grid grid-cols-3 mt-2">
              {["37", "38", "39", "40", "41", "42"].map((size) => (
                <div
                  onClick={() => setDefaultSize(size)}
                  key={size}
                  className="duration-300 cursor-pointer w-[115px] h-10 xl:h-16 rounded-lg flex items-center justify-center mb-2 text-xl"
                  style={{
                    background:
                      size == defaultSize
                        ? "var(--color-secondary)"
                        : "var(--color-primary)",
                    color:
                      size == defaultSize ? "#fff" : "var(--color-secondary)",
                  }}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-10 border-gray-200 border-t-[1px] pt-4">
            <div className="flex items-center flex-col xl:flex-row">
              <h2 className="text-md xl:text-xl">
                {(3850000).toLocaleString()}
                تومان
              </h2>
            </div>
            <div>
              <button
                className="xl:mr-0 mx-auto btn pl-16 pr-4 lg:pr-4 lg:pl-20 text-lg xl:text-xl flex items-center justify-start relative bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-lg"
                style={{ color: "#fff" }}
              >
                <Image
                  alt="آیکون"
                  src={ArrowBottom}
                  className="absolute w-[25px] h-[25px] left-3 top-[11px] rotate-[90deg]"
                />
                خـــــرید
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Services />
      </div>
    </>
  );
}

function Shoe() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("shoe-draco.glb");
  const [hovered, set] = useState(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    //@ts-ignore
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    );
    //@ts-ignore
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group
      scale={1.5}
      ref={ref}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
}

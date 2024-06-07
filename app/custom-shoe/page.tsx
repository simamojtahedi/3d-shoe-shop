"use client";
import { useRef, useState, useEffect } from "react";
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
      <div className="flex align-center justify-between mt-5 w-full xl:w-3/6">
        <h5 className="flex-1 xl:min-w-[260px] min-w-[160px] text-xs xl:text-md">
          {title}
        </h5>
        <div className="flex items-center justify-start flex-1">
          <div
            className="xl:w-6 w-4 xl:h-6 h-4 rounded-full shadow-md ml-2"
            style={{
              background: color,
            }}
          ></div>
          <h6 style={{ direction: "ltr" }} className="text-xs xl:text-md">
            {color}
          </h6>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row justify-between align-center px-5 xl:px-10 py-5">
        <div className="relative height-[950px] xl:height-[550px] flex-1 flex justify-center mb-10 xl:mb-0 mt-10 xl:mt-0 xl:ml-5 xl:bg-[var(--color-primary)] rounded-[30px] cursor-pointer">
          <p className="xl:absolute text-xs xl:text-lg text-[var(--color-secondary)] w-full text-center pt-5">
            با کلیک روی هر بخش از کفش، می‌توانید رنگ موردنظر خود را اعمال کنید.
          </p>
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

        <div className="flex-1 p-0 xl:border-r-2 xl:pr-5">
          <h1 className="text-2xl xl:text-right text-center">
            {" "}
            کتانی مدل DX9016{" "}
          </h1>

          <div className="mt-7 flex items-center flex-row">
            سایز:
            <div className="flex align-center mr-5 mt-1 xl:mt-0">
              {["38", "39", "40", "41", "42"].map((size) => (
                <div
                  onClick={() => setDefaultSize(size)}
                  key={size}
                  className="duration-300 cursor-pointer w-10 xl:w-14 h-10 xl:h-14 ml-1 xl:ml-3 rounded-xl flex items-center justify-center"
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

          <div className="mt-7 flex items-start flex-col">
            {ColorComponent(" بدنه کفش:", state.items.mesh)}
            {ColorComponent(" بندهای کفش:", state.items.laces)}
            {ColorComponent(" بندهای بدنه کفش:", state.items.band)}
            {ColorComponent(" سوراخ بندهای کفش:", state.items.caps)}
            {ColorComponent(" داخل کفش:", state.items.inner)}
            {ColorComponent(" کفه کفش:", state.items.sole)}
            {ColorComponent(" اشکال کناره کفش:", state.items.stripes)}
            {ColorComponent(" آرم پشت کفش:", state.items.patch)}
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center flex-col xl:flex-row">
              <h2 className="text-md xl:text-2xl mr-3">
                {(3850000).toLocaleString()}
                تومان
              </h2>
            </div>
            <div>
              <button
                className="xl:mr-0 mx-auto btn px-10 text-lg xl:text-xl flex items-center justify-start relative bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-lg"
                style={{ color: "#fff" }}
              >
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

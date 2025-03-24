import React from "react";
import { TitleH2 } from "../Global/ContainerTitle";
import ContainerText from "../Global/ContainerText";
import { Switch } from '@headlessui/react'
import { useState } from "react";

const Settings = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="p-2 ">
      <TitleH2 text={"Configuración"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* NOTIFICACIONES SETTINGS */}
        <div className="p-4 flex flex-col gap-4 shadow-xl rounded-sm">
          <TitleH2 text={"Notificaciones"} />
          <div className="flex items-center justify-between p-2">
            <ContainerText text={"Recibir notificaciones de nuevos lugares"} />
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex items-center justify-between p-2">
            <ContainerText text={"Recibir notificaciones de comentarios"} />
            <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
    >
      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;

  import React, { useState, useContext } from "react";
  import { ContextNewPlace } from "../Context/ContextNewPlace";
  import { IconClose } from "../Global/Icons";
  import MapComponent from "../../MapConfig/MapComponent";
  import { ContextDestinations } from "../Context/ContextDestinations";

  const ModalAdd = () => {
    const { showModalAdd, changeStateModalAdd, addPlace } =
      useContext(ContextNewPlace);
    const [location, setLocation] = useState(null);

    const handleLocationSelect = (latlng) => {
      setLocation(latlng);
    };

    // Estado que almacena los datos del lugar que el usuario quiere subir
    const [placeData, setPlaceData] = useState({
      nombre: "",
      telefono: "",
      descripcion: "",
      actividades: [],
      redes: {
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
      },
      ubicacion: null,
      municipio: "", // Add this new field
    });
  const {municipalities} = useContext(ContextDestinations)
    // Estado que maneja las actividades que el usuario quiere subir
    const [actividad, setActividad] = useState("");

    // Estado que maneja las redes sociales que el usuario quiere subir
    const [redesActivas, setRedesActivas] = useState({
      facebook: false,
      instagram: false,
      twitter: false,
      website: false,
    });

    // Funcion que maneja los cambios en los inputs del formulario cada que el usuario modifica el valor del input el input se actualiza
    const handleChange = (e) => {
      setPlaceData({ ...placeData, [e.target.name]: e.target.value });
    };

    // Funcion que maneja los cambios en los inputs de las redes sociales asi el usuario puede manejar que redes quiere subir
    const handleRedesChange = (e) => {
      setPlaceData({
        ...placeData,
        redes: { ...placeData.redes, [e.target.name]: e.target.value },
      });
    };
    const handleRedesCheckbox = (e) => {
      const { name, checked } = e.target;
      setRedesActivas({ ...redesActivas, [name]: checked });

      if (!checked) {
        setPlaceData({
          ...placeData,
          redes: { ...placeData.redes, [name]: "" },
        });
      }
    };

    // Funcion que maneja el agregar una nueva actividad al lugar que el usuario quiere subir
    const addActividad = () => {
      if (actividad.trim() !== "") {
        setPlaceData({
          ...placeData,
          actividades: [...placeData.actividades, actividad.trim()],
        });
        setActividad("");
      }
    };

    const handlePublish = () => {
      if (placeData.nombre && placeData.descripcion && placeData.actividades.length > 0 && location != null && placeData.municipio != "" ) {
        addPlace(placeData);
        setPlaceData({
          nombre: "",
          telefono: "",
          descripcion: "",
          actividades: [],
          redes: { facebook: "", instagram: "", twitter: "", website: "" },
        });
        setRedesActivas({
          facebook: false,
          instagram: false,
          twitter: false,
          website: false,
        });
        changeStateModalAdd();
        console.log(placeData);
      } else {
        alert("Por favor, completa los campos obligatorios.");
      }
    };

    return (
      <>
        {showModalAdd && (
          <div className="z-50 w-full h-screen fixed top-0 left-0 bg-black/80 dark:text-white flex items-center justify-center">
            <div className="w-full md:w-[95%] h-[95%] bg-white  dark:bg-dark rounded-md p-5 overflow-auto flex flex-col">
              <header className="flex items-center justify-between border-b pb-2">
                <h1 className="text-2xl">Añadir Lugar</h1>
                <button onClick={changeStateModalAdd} className="w-8 h-8">
                  <IconClose />
                </button>
              </header>

              {/* FORMULARIO */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 text-left">
                <form className="p-2 space-y-4" id="form-lugares">
                  <div>
                    <h1 className="text-lg mb-2">Nombre del Lugar: *</h1>
                    <input
                      className="w-full rounded-md p-2 border text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      value={placeData.nombre}
                      name="nombre"
                      onChange={handleChange}
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>

                  <div>
                    <h1 className="text-lg mb-2">Municipio: *</h1>
                    <select
                      className="w-full rounded-md p-2 border text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      name="municipio"
                      value={placeData.municipio}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un municipio</option>
                      {municipalities.slice(1).map((municipio) => (
                        <option key={municipio} value={municipio}>
                          {municipio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <h1 className="text-lg mb-2">Teléfono</h1>
                    <input
                      className="w-full rounded-md p-2 border text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      name="telefono"
                      value={placeData.telefono}
                      onChange={handleChange}
                      type="text"
                      placeholder="Teléfono"
                    />
                  </div>

                  <div>
                    <h1 className="text-lg mb-2">Descripción *</h1>
                    <textarea
                      className="w-full rounded-lg p-2 border text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      name="descripcion"
                      value={placeData.descripcion}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Describe el lugar"
                    ></textarea>
                  </div>

                  <div>
                    <h1 className="text-lg mb-2">Elige las Etiquetas *</h1>
                    <div className="flex gap-4 items-center">
                      <input
                        type="text"
                        className="w-full rounded-md p-2 border text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        value={actividad}
                        onChange={(e) => setActividad(e.target.value)}
                        placeholder="Ingrese las actividades de su lugar"
                      />
                      <button
                        type="button"
                        onClick={addActividad}
                        className="bg-green-700 hover:bg-green-800 rounded-xl p-2 text-white transition"
                      >
                        Agregar
                      </button>
                    </div>
                    <form className="mt-2 flex flex-wrap gap-2">
                      {placeData.actividades.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center bg-gray-100 dark:bg-dark2  p-2 rounded-md mt-2"
                        >
                          {item}
                          <button
                            type="button"
                            onClick={() =>
                              setPlaceData({
                                ...placeData,
                                actividades: placeData.actividades.filter(
                                  (_, i) => i !== index
                                ),
                              })
                            }
                            className="text-red-600 ml-2 cursor-pointer"
                          >
                            ✖
                          </button>
                        </li>
                      ))}
                    </form>
                  </div>

                  {/* ELEGIR UBICACION EN EL MAPA */}
                  <div className="flex flex-col gap-4">
                    <h1 className="text-lg mb-2">Elige la ubicación de tu lugar *</h1>
                    <MapComponent onLocationSelect={handleLocationSelect} />
                    {location && (
                      <div className="space-y-2">
                        <ul>
                          <span className="font-bold">Ubicación seleccionada:</span>
                          <li>Latitud: {location.lat}</li>
                          <li>Longitud: {location.lng}</li>
                        </ul>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setPlaceData({ ...placeData, ubicacion: location });
                              alert("Ubicación guardada exitosamente");
                            }}
                            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
                          >
                            Guardar ubicación
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setLocation(null);
                              setPlaceData({ ...placeData, ubicacion: null });
                            }}
                            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md"
                          >
                            Eliminar ubicación
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h1 className="text-lg mb-2">Redes Sociales</h1>
                    {["facebook", "instagram", "twitter", "website"].map(
                      (red) => (
                        <div key={red} className="flex items-center gap-4 mb-2">
                          <input
                            type="checkbox"
                            name={red}
                            checked={redesActivas[red]}
                            onChange={handleRedesCheckbox}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <input
                            type="text"
                            className={`w-full rounded-md p-2 border text-gray-900 bg-gray-50 border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                              redesActivas[red]
                                ? "dark:bg-gray-700 opacity-100"
                                : "bg-gray-600/50 opacity-50"
                            }`}
                            name={red}
                            value={placeData.redes[red]}
                            onChange={handleRedesChange}
                            placeholder={`${
                              red.charAt(0).toUpperCase() + red.slice(1)
                            } URL`}
                            disabled={!redesActivas[red]}
                          />
                        </div>
                      )
                    )}
                  </div>
                </form>

                <div className="p-2 border border-gray-300 rounded-md">
                  <h1 className="text-lg mb-4">Subir imágenes</h1>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-500 cursor-pointer transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-image-fill text-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botones */}
              <hr className="my-5 border-gray-300" />
              <footer className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={handlePublish}
                  className="bg-green-700 hover:bg-green-800 rounded-xl p-2 text-white transition"
                >
                  Publicar
                </button>
                
                <button
                  className="bg-red-700 hover:bg-red-800 rounded-xl p-2 text-white transition"
                  onClick={changeStateModalAdd}
                >
                  Cancelar
                </button>
              </footer>
            </div>
          </div>
        )}
      </>
    );
  };

  export default ModalAdd;

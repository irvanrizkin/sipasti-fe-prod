import { Button, Pagination, Tabs } from "@mui/material";
import { Field, FieldArray } from "formik";
import SearchBox from "../../../components/searchbox";
import AddRowModal from "../../../components/addrowmodal";
import TextInput from "../../../components/input";
import Dropdown from "../../../components/dropdown";
import { useState } from "react";

const MaterialForm = ({
    values,
    setFieldValue,
    hide,
    provincesOptions,
    kelompokMaterialOptions,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    console.log("current page", currentPage);
  
    const paginatedMaterials = values.materials.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    // const {
    //   setInitialValues
    // } = useStore();
  
    // useEffect(() => {
    //   if (currentPage != 0) {
    //     setInitialValues({ materials: [] });
    //   }
    // }, [currentPage, setInitialValues]);
  
    console.log("paginatedMaterials", paginatedMaterials);
  
    return (
      <div
        className={`${
          hide ? "hidden" : ""
        } rounded-[16px] border border-gray-200 overflow-hidden`}>
        <FieldArray name="materials">
          {({ push, remove }) => (
            <div className="">
              <div className="flex flex-row justify-between items-center">
                <div className="mt-6">
                  <Tabs
                    items={["Material", "Peralatan", "Tenaga Kerja"]}
                    onChange={(index) => {}}
                    selectedValue={0}
                  />
                </div>
                <div className="flex flex-row justify-between items-center space-x-4">
                  <SearchBox
                    placeholder="Cari Material..."
                    onSearch={() => {}}
                    withFilter={true}
                  />
                  <Button
                    variant="solid_blue"
                    size="Medium"
                    onClick={() => setIsModalOpen(true)}>
                    Tambah Data
                  </Button>
                </div>
                {isModalOpen && (
                  <AddRowModal
                    handleClose={() => setIsModalOpen(false)}
                    handleAddRow={(rowsToAdd) => {
                      for (let i = 0; i < rowsToAdd; i++) {
                        push();
                      }
                    }}
                    currentIndex={0}
                  />
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="table-auto w-full min-w-max">
                  <thead>
                    <tr className="bg-custom-blue-100 text-left text-emphasis-on_surface-high uppercase tracking-wider">
                      <th className="px-3 py-6 text-base font-normal">
                        Nama Material
                      </th>
                      <th className="px-3 py-6 text-base font-normal">Satuan</th>
                      <th className="px-3 py-6 text-base font-normal">
                        Spesifikasi
                      </th>
                      <th className="px-3 py-6 text-base font-normal">Ukuran</th>
                      <th className="px-3 py-6 text-base font-normal">
                        Kodefikasi
                      </th>
                      <th className="px-3 py-6 text-base font-normal">
                        Kelompok Material
                      </th>
                      <th className="px-3 py-6 text-base font-normal">
                        Jumlah Kebutuhan
                      </th>
                      <th className="px-3 py-6 text-base font-normal">Merk</th>
                      <th className="px-3 py-6 text-base font-normal">
                        Provinsi
                      </th>
                      <th className="px-3 py-6 text-base font-normal">Kota</th>
                      <th className="px-3 py-6 text-base font-normal">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-surface-light-background">
                    {paginatedMaterials.map((_, index) => {
                      const actualIndex = (currentPage - 1) * itemsPerPage + index;
                      console.log("actualIndex", actualIndex);
                      return (
                        <tr key={actualIndex} className="border-b">
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.nama_material`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.nama_material`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Nama Material"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.material
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.satuan`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.satuan`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Satuan"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.satuan
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.spesifikasi`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.spesifikasi`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Spesifikasi"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.spesifikasi
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.ukuran`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.ukuran`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Ukuran"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.ukuran
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.kodefikasi`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.kodefikasi`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Kodefikasi"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.kodefikasi
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.kelompok_material`}>
                              {({ field, form }) => (
                                <Dropdown
                                  options={kelompokMaterialOptions}
                                  value={() => {
                                    const selectedKelompokMaterial = kelompokMaterialOptions.find(
                                      (kelompokMaterial) =>
                                        kelompokMaterial.value === field.value
                                    );
                                    console.log("selectedKelompokMaterial", selectedKelompokMaterial);
                                    return selectedKelompokMaterial;
                                  }}
                                  onSelect={(val) =>
                                    setFieldValue(
                                      `materials.${actualIndex}.kelompok_material`,
                                      val.value,
                                    )
                                  }
                                  placeholder="Pilih Kelompok Material"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]
                                      ?.kelompok_material
                                  }
                                  labelPosition="top"
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.jumlah_kebutuhan`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.jumlah_kebutuhan`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Jumlah Kebutuhan"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]
                                      ?.jumlah_kebutuhan
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.merk`}>
                              {({ field, form }) => (
                                <TextInput
                                  value={field.value}
                                  onChange={(e) =>
                                    form.setFieldValue(
                                      `materials.${actualIndex}.merk`,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Merk"
                                  className="input-field"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.merk
                                  }
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.provinsi`}>
                              {({ field, form }) => (
                                <Dropdown
                                  options={provincesOptions}
                                  value={() => {
                                    const selectedProvince =
                                      provincesOptions.find(
                                        (province) =>
                                          province.value ===
                                          values.materials[actualIndex]?.provincies_id
                                      );
                                      console.log("selectedProvince", values.materials[actualIndex]?.provincies_id);
                                    return selectedProvince;
                                  }}
                                  onSelect={(val) => {
                                    setFieldValue(
                                      `materials.${actualIndex}.provincies_id`,
                                      val.value
                                    );
                                    setFieldValue(
                                      `materials.${actualIndex}.cities_id`,
                                      ""
                                    ); // Reset cities_id
                                  }}
                                  placeholder="Pilih Provinsi"
                                  isRequired={true}
                                  errorMessage={
                                    form.errors?.materials?.[actualIndex]?.province
                                  }
                                  labelPosition="top"
                                />
                              )}
                            </Field>
                          </td>
                          <td className="px-3 py-6">
                            <Field name={`materials.${actualIndex}.kota`}>
                              {({ field, form }) => {
                                const selectedProvince = provincesOptions.find(
                                  (province) =>
                                    province.value ===
                                    values.materials[actualIndex]?.provincies_id
                                );
                                const cities = selectedProvince
                                  ? selectedProvince.cities
                                  : [];
                                const transformedCities = cities.map((city) => ({
                                  value: city.cities_id,
                                  label: city.cities_name,
                                }));
  
                                return (
                                  <Dropdown
                                    options={transformedCities}
                                    value={transformedCities.find(
                                      (city) =>
                                        city.value ===
                                        values.materials[actualIndex]?.cities_id
                                    )}
                                    onSelect={(val) =>
                                      setFieldValue(
                                        `materials.${actualIndex}.cities_id`,
                                        val.value
                                      )
                                    }
                                    placeholder="Pilih Kota"
                                    isRequired={true}
                                    errorMessage={
                                      form.errors?.materials?.[actualIndex]?.cities_id
                                    }
                                    labelPosition="top"
                                  />
                                );
                              }}
                            </Field>
                          </td>
                          <td className="px-3 py-6 text-center">
                            <button
                              onClick={() => remove(actualIndex)}
                              className="text-red-500 hover:text-red-700">
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Pagination
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  totalData={values.materials.length}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          )}
        </FieldArray>
      </div>
    );
  };

export default MaterialForm;
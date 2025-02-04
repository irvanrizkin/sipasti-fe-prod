import React, { useEffect, useState } from "react";
import { CloseCircle } from "iconsax-react";
import Select from "react-select";
import colors from "../styles/colors";

const Dropdown = ({
  options,
  label,
  placeholder = "Pilih Opsi",
  onSelect,
  value,
  isRequired = false,
  errorMessage = "Wajib diisi",
  labelPosition = "top",
  labelWidth = "390px",
  disableMapping = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(value || null);
  const [error, setError] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  // console.log("options", label, disableMapping);

  const formattedOptions = disableMapping
    ? options
    : options.map((option) => ({
        value: option.value,
        label: option.label,
      }));

  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
    onSelect(selectedOption);

    if (isRequired && !selectedOption) {
      setError(errorMessage);
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    if (isRequired && !selectedValue) {
      setError(errorMessage);
    }
  };

  return (
    <div
      className={`relative flex ${
        labelPosition === "left" ? "flex-row items-center" : "flex-col"
      } w-full`}>
      {label && (
        <label
          className={`text-B2 text-emphasis-on_surface-high ${
            labelPosition === "left" ? "mr-16" : "mb-1"
          }`}
          style={{
            width: labelPosition === "left" ? labelWidth : "auto",
            minWidth: labelPosition === "left" ? labelWidth : "auto",
          }}>
          {label}
          {isRequired && <span className="text-custom-red-500"> *</span>}
        </label>
      )}
      <div className={`w-full ${labelPosition === "left" ? "flex-1" : ""}`}>
        <Select
          value={selectedValue}
          onChange={handleChange}
          onBlur={handleBlur}
          options={formattedOptions}
          placeholder={placeholder}
          className={`react-select ${error ? "border-custom-red-500" : ""}`}
          classNamePrefix="select"
          isClearable={false}
          styles={{
            control: (base) => ({
              ...base,
              minHeight: "48px",
              borderWidth: "1.5px",
              borderRadius: "16px",
              transition: "all 200ms ease-in-out",
              borderColor: error
                ? colors.Solid.Basic.Red[500]
                : base.borderColor,
              boxShadow: "none",
              "&:hover": {
                borderColor: error
                  ? colors.Solid.Basic.Red[500]
                  : colors.Solid.Basic.Blue[500],
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "gray",
              textAlign: "left",
            }),
            menu: (base) => ({
              ...base,
              zIndex: 100000,
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              padding: "8px",
            }),
            option: (base, state) => ({
              ...base,
              fontSize: "0.875rem",
              textAlign: "left",
              padding: "8px",
              borderRadius: "8px",
              marginBottom: "4px",
              backgroundColor: state.isSelected
                ? colors.Solid.Basic.Blue[500]
                : state.isFocused
                ? colors.Solid.Basic.Blue[50]
                : base.backgroundColor,
              color: state.isSelected
                ? "white"
                : state.isFocused
                ? colors.Solid.Basic.Blue[500]
                : base.color,
            }),
          }}
          menuPortalTarget={isBrowser ? document.body : null}
          menuPosition="fixed"
        />
        {error && (
          <div className="flex items-center mt-1">
            <CloseCircle
              color={colors.Solid.Basic.Red[500]}
              variant="Linear"
              size={16}
              className="mr-1"
            />
            <span className="text-custom-red-500 text-ExtraSmall">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

sap.ui.define(
    "com/ibm/zproduct02/controls/CurrencyCode",
    ["sap/ui/base/DataType"],
    function (DataType) {
      "use strict";
  
      return DataType.createType(
        "com.ibm.zproduct02zproduct02.controls.CurrencyCode",
        {
          isValid: function (sValue) {
            return sValue === "EUR" || sValue === "USD";
          },
        },
        DataType.getType("string")
      );
    },
    true
  );
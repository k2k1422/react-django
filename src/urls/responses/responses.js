// this file contains the responses of the api endpoints
export const auth = {
  LOGIN: {
    response_code: "206",
    response_message: "Success! Logged in",
    data: {
      uid: "df8237e8-8dce-4468-a413-3e14237c4f78",
      access_token:
        "ba9425c7-7116-44ff-a54a-dd02e0b510cb-d5703b00-c12d-49a7-afc9-3d2d9a7dd830",
      access_token_expiry_time: 1646033476,
      refresh_token:
        "b9c2c000-90ae-46b1-9a96-845fcf4c8976-2772b200-c5a4-4883-bb6e-03242c675a83",
      refresh_token_expiry_time: 1646033476,
      // prettier-ignore
      activity: {
        "Access Management": ["W", "R"],
        "Dashboard": ["R"],
        "Data Load": ["W", "R"],
        "Demand Planning Dashboard": ["W", "R"],
        "Forecast Assignment": ["W", "R"],
        "Forecast Execution": ["W", "R"],
        "Forecast Profile": ["W", "R"],
        "Product Pool Assignment": ["W", "R"],
        "Profile Management": ["W", "R"],
        "Scheduler": ["W", "R"],
        "Table View": ["R"],
        "Variant": ["W", "R"],
      }
    },
  },
  REFRESH_TOKEN: {
    response_code: "210",
    response_message: "Success! Created access token",
    data: {
      access_token:
        "d4e73634-54b6-41e2-a76d-38581b5086db-9a1e6a3b-2f6a-44ad-9cd7-6febe1d53955",
      access_token_expiry_time: 1646033476,
    },
  },
};

export const demandPlanning = {};

export const forecastModelAssignment = {
  FETCH_FORECAST_SELECTION_LIST: {
    response_code: "305",
    response_message: "Success! Forecast profile data fetched",
    data: [
      {
        profile_id: "eff43000-796c-400e-9d3b-d20f79d53185",
        profile_name: "Quarterly forecast",
        profile_name_desc: "Some description about quarterly forecast profile",
        period_indicator: "W",
        forecast_horizon_period: 10,
        history_horizon_period: 80,
        created_by: "Pramit Patra",
        created_date: 1580747871,
      },
      {
        profile_id: "50c9e030-cbd4-415e-80b0-4c424e7398a1",
        profile_name: "For dem",
        profile_name_desc: "demo",
        period_indicator: "W",
        forecast_horizon_period: 5,
        history_horizon_period: 100,
        created_by: "Su User",
        created_date: 1582709974,
      },
    ],
  },
  FETCH_ASSIGN_COMBINATION: {
    response_code: "510",
    response_message: "Success! Product pool fetched",
    data: {
      Location: {
        BLR: {
          Status: false,
          Category: {
            Kitchen: {
              Status: false,
              Brand: {
                Borosil: {
                  Status: false,
                  Product: {
                    BORBGRILLSS23: { Status: false },
                    BORBSC20SSB12: { Status: false },
                  },
                },
              },
            },
          },
        },
        MUM: {
          Status: false,
          Category: {
            Kitchen: {
              Status: false,
              Brand: {
                Borosil: {
                  Status: false,
                  Product: {
                    BORICYTRD2400V: { Status: false },
                    BORICYTSQ2320V: { Status: false },
                  },
                },
                "Maharaja Whiteline": {
                  Status: false,
                  Product: {
                    MAH5200000295: { Status: false },
                    MAH5200000400: { Status: false },
                  },
                },
                "Pigeon by Stovekraft": {
                  Status: false,
                  Product: {
                    PIGE104: { Status: false },
                    PIGE106: { Status: false },
                  },
                },
                Prestige: {
                  Status: false,
                  Product: {
                    PRE10025: { Status: false },
                    PRE10030: { Status: false },
                  },
                },
                Suryaflame: {
                  Status: false,
                  Product: {
                    SURFBASSBB2B: { Status: false },
                    SURFBASSCI2B: { Status: false },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  FETCH_MODELS_LIST: {
    response_code: "607",
    response_message: "Success! Models details meta fetched",
    data: {
      ARIMA: {
        d: { default_value: 0, options: [], type: "int" },
        p: { default_value: 1, options: [], type: "int" },
        q: { default_value: 1, options: [], type: "int" },
      },
      Croston: { aplha: { default_value: 0.25, options: [], type: "float" } },
      "Holt Winters": {
        alpha: { default_value: 0.7, options: [], type: "float" },
        beta: { default_value: 0.67, options: [], type: "float" },
        damped: {
          default_value: false,
          options: [true, false],
          type: "boolean",
        },
        gamma: { default_value: 0.6, options: [], type: "float" },
        seasonal: {
          default_value: "additive",
          options: ["add", "mul"],
          type: "string",
        },
        seasonal_periods: { default_value: 4, options: [], type: "int" },
        trend: {
          default_value: "additive",
          options: ["add", "mul"],
          type: "string",
        },
      },
      "Moving Average": {
        ma_window: { default_value: 5, options: [], type: "int" },
      },
      "Simple Exponential Smoothing": {
        aplha: { default_value: 0.25, options: [], type: "float" },
        use_brute: { default_value: true, options: [], type: "boolean" },
      },
      "Weighted Moving Average": {
        wma_window: { default_value: 5, options: [], type: "int" },
      },
    },
  },
  SAVE_MODEL_ASSIGNMENT: {
    response_code: "802",
    response_message: "Success! Job created",
    data: null,
  },
};

export const variants = {
  FETCH_VARIANT_LIST: {
    response_code: "406",
    response_message: "Success! Variant data fetched",
    data: [
      {
        org_id: "",
        variant_id: "cf8b21634cdba3e3159d583213d0607c",
        variant_name: "LOC_BRAND",
        variant_desc: "Location and Brand level aggregation",
        aggregation_levels: ["location", "brand"],
        aggregation: '["location","brand"]',
        created_by: "Pramit Patra",
        created_date: 1580748054,
        udf_1: 0,
        udf_2: "",
        udf_3: false,
      },
      {
        org_id: "",
        variant_id: "70639d4c3536adbc2e3aa0f693625780",
        variant_name: "LOC_SKU",
        variant_desc: "Location and SKU level aggregation",
        aggregation_levels: ["location", "sku_code"],
        aggregation: '["location","sku_code"]',
        created_by: "Pramit Patra",
        created_date: 1580748105,
        udf_1: 0,
        udf_2: "",
        udf_3: false,
      },
      {
        org_id: "",
        variant_id: "d5189de027922f81005951e6efe0efd5",
        variant_name: "LOC ",
        variant_desc: "Location level aggregation",
        aggregation_levels: ["location"],
        aggregation: '["location"]',
        created_by: "Pramit Patra",
        created_date: 1580790138,
        udf_1: 0,
        udf_2: "",
        udf_3: false,
      },
      {
        org_id: "",
        variant_id: "e149282d771582abd6e0c85d26bd6ae7",
        variant_name: "LOC_CAT",
        variant_desc: "Location Category level aggregation",
        aggregation_levels: ["location", "category"],
        aggregation: '["location","category"]',
        created_by: "Pramit Patra",
        created_date: 1580790242,
        udf_1: 0,
        udf_2: "",
        udf_3: false,
      },
    ],
  },
};

export const dataLoad = {
  DATA_LOAD_STATUS_LIST: {
    response_code: "605",
    response_message: "Success! Order status options meta fetched",
    data: ["CONFIRMED", "PENDING", "SHIPPED COMPLETE"],
  },
};

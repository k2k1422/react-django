export const forecastModelAssignment = {
  SAVE_MODEL_ASSIGNMENT: {
    job_name: "Assignment",
    data: {
      variant_id: "cf8b21634cdba3e3159d583213d0607c",
      product_pool: {
        Location: {
          BLR: {
            Status: true,
            Category: {
              Kitchen: {
                Status: true,
                Brand: {
                  Borosil: {
                    Status: true,
                    Product: {
                      BORBGRILLSS23: { Status: true },
                      BORBSC20SSB12: { Status: false },
                    },
                  },
                },
              },
            },
          },
          MUM: {
            Status: true,
            Category: {
              Kitchen: {
                Status: true,
                Brand: {
                  Borosil: {
                    Status: true,
                    Product: {
                      BORB07GT73VF6: { Status: false },
                      BORBGRILLSS23: { Status: true },
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
      forecastprofile_model: {
        "eff43000-796c-400e-9d3b-d20f79d53185": ["Moving Average"],
      },
    },
  },
};

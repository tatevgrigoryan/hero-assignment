/**
 * Next.js config that enforces packages-only imports from apps.
 */
module.exports = {
  extends: ["./base.cjs", "next/core-web-vitals"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../apps/*", "../../apps/*", "../../../apps/*"],
            message: "Import shared code from packages instead of other apps."
          },
          {
            group: [
              "../packages/*",
              "../../packages/*",
              "../../../packages/*",
              "../../../../packages/*"
            ],
            message: "Apps must import shared code from @bluehero/* packages."
          },
          {
            group: ["../supabase/*", "../../supabase/*", "../../../supabase/*"],
            message: "Access Supabase via packages instead of direct workspace imports."
          },
          {
            group: ["../tests/*", "../../tests/*", "../../../tests/*"],
            message: "Tests are not allowed as runtime dependencies."
          },
          {
            group: ["@hero/*"],
            message: "Apps must import shared code from @bluehero/* packages."
          }
        ]
      }
    ]
  }
};

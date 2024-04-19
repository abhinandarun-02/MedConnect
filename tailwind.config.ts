import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "#e2e8f0", // Default border color
          secondary: "#2563eb", // Secondary border color
        },
        input: "#e2e8f0", // Border color for inputs such as <Input />, <Select />, <Textarea />
        ring: "#f1f5f9", // Used for focus ring

        // Default background color of <body />...etc
        background: "#ffffff",
        foreground: "#020817",

        // Primary colors for <Button />
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#f8fafc",
          background: {
            100: "#d5def9",
            200: "#aabdf3",
            300: "#809bec",
            400: "#557ae6",
            500: "#2b59e0",
            600: "#2247b3",
            700: "#1a3586",
            800: "#11245a",
            900: "#09122d",
          },
        },

        // Secondary colors for <Button />
        secondary: {
          DEFAULT: "#f4f7fd",
          foreground: "#0f172a",
        },

        // Used for destructive actions such as <Button variant="destructive">
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#f8fafc",
        },

        // Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />
        muted: {
          DEFAULT: "#dedede",
          foreground: "#64748b",
        },

        // Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },

        // Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#020817",
        },

        // Background color for <Card />
        card: {
          DEFAULT: "#ffffff",
          foreground: "#112971",
          dark: "#051851",
        },
      },
      borderRadius: {
        lg: "0.7rem",
        md: "calc(0.7rem - 2px)",
        sm: "calc(0.7rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

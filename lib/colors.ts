/**
 * CENTRALIZED COLOR SYSTEM FOR MUFO
 * ================================
 * All colors used throughout the website are defined here.
 * To change the color scheme, simply update the hex values below.
 * CSS variables in globals.css reference these through the theme.
 *
 * USAGE:
 * - In CSS/Tailwind: Use the CSS variable names (e.g., bg-brand, text-brand)
 * - In TypeScript: Import colors from this file for dynamic styling
 */

export const colors = {
  // ===================
  // BRAND COLORS
  // ===================
  brand: {
    primary: '#1e3a5f',      // Deep navy blue - main brand color
    hover: '#152d4a',        // Darker navy - hover states
    light: '#2d4a6f',        // Lighter navy - subtle accents
    dark: '#0f1d2f',         // Very dark navy - dark sections
  },

  // ===================
  // ACCENT COLORS
  // ===================
  accent: {
    primary: '#d4af37',      // Gold - call-to-action, highlights
    hover: '#c4a030',        // Darker gold - hover states
    light: '#e5c76b',        // Light gold - subtle accents
  },

  // ===================
  // NEUTRAL COLORS
  // ===================
  neutral: {
    white: '#ffffff',
    black: '#000000',

    // Gray scale (lightest to darkest)
    gray: {
      50: '#f9fafb',         // Very light gray - subtle backgrounds
      100: '#f3f4f6',        // Light gray - card backgrounds
      200: '#e5e7eb',        // Light gray - borders
      300: '#d1d5db',        // Medium light gray - disabled states
      400: '#9ca3af',        // Medium gray - placeholder text
      500: '#6b7280',        // Gray - secondary text
      600: '#4b5563',        // Dark gray - body text
      700: '#374151',        // Darker gray - emphasis text
      800: '#1f2937',        // Very dark gray - headings
      900: '#111827',        // Near black - primary text
      950: '#030712',        // Deepest gray - dark backgrounds
    },
  },

  // ===================
  // SEMANTIC COLORS
  // ===================
  semantic: {
    success: '#10b981',      // Green - success states
    successHover: '#059669',
    warning: '#f59e0b',      // Amber - warning states
    warningHover: '#d97706',
    error: '#ef4444',        // Red - error states
    errorHover: '#dc2626',
    info: '#3b82f6',         // Blue - info states
    infoHover: '#2563eb',
  },

  // ===================
  // OVERLAY COLORS
  // ===================
  overlay: {
    light: 'rgba(255, 255, 255, 0.95)',  // White overlay
    dark: 'rgba(0, 0, 0, 0.7)',          // Dark overlay for images
    darker: 'rgba(0, 0, 0, 0.85)',       // Darker overlay
    brand: 'rgba(30, 58, 95, 0.9)',      // Brand color overlay
  },

  // ===================
  // GRADIENT PRESETS
  // ===================
  gradients: {
    // Hero overlay gradient
    heroOverlay: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
    // Brand gradient
    brand: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
    // Gold accent gradient
    accent: 'linear-gradient(135deg, #d4af37 0%, #e5c76b 100%)',
    // Dark section gradient
    dark: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
  },
} as const;

// Type exports for TypeScript support
export type BrandColor = keyof typeof colors.brand;
export type AccentColor = keyof typeof colors.accent;
export type GrayColor = keyof typeof colors.neutral.gray;
export type SemanticColor = keyof typeof colors.semantic;

// Helper function to get color value
export function getColor(
  category: 'brand' | 'accent' | 'semantic',
  shade: string
): string {
  const colorCategory = colors[category];
  return (colorCategory as Record<string, string>)[shade] || colors.brand.primary;
}

// Helper function to get gray color
export function getGray(shade: GrayColor): string {
  return colors.neutral.gray[shade];
}

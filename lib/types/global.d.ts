declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: any) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: () => void;
  }
}

export {};

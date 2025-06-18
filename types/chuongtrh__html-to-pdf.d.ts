declare module "@chuongtrh/html-to-pdf" {
  interface PDFOptions {
    format?: string;
    headerTemplate?: string;
    footerTemplate?: string;
    displayHeaderFooter?: boolean;
    margin?: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
    printBackground?: boolean;
    path?: string;
  }

  interface HTMLToPDFParams {
    templateHtml: string;
    dataBinding: any;
    options: PDFOptions;
  }

  export function html_to_pdf(params: HTMLToPDFParams): Promise<Buffer>;
}

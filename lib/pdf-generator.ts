interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface InvoiceData {
  business: {
    name: string;
    email: string;
    address: string;
    logo?: string;
  };
  customer: {
    name: string;
    email: string;
    address: string;
  };
  invoice: {
    number: string;
    date: string;
    dueDate: string;
  };
  items: LineItem[];
  taxRate: number;
}

export async function generateInvoicePDF(
  invoiceData: InvoiceData,
  isWatermark: boolean = false
): Promise<Blob> {
  try {
    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ invoiceData, isWatermark }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    return await response.blob();
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
}

export function downloadPDF(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

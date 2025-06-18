import { NextRequest, NextResponse } from "next/server";
import { html_to_pdf } from "@chuongtrh/html-to-pdf";
import fs from "fs";
import path from "path";

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

export async function POST(request: NextRequest) {
  try {
    const {
      invoiceData,
      isWatermark = false,
    }: { invoiceData: InvoiceData; isWatermark?: boolean } =
      await request.json();

    // Calculate totals
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + item.total,
      0
    );
    const taxAmount = (subtotal * invoiceData.taxRate) / 100;
    const total = subtotal + taxAmount;

    // Prepare data for template
    const dataBinding = {
      business: invoiceData.business,
      customer: invoiceData.customer,
      invoice: invoiceData.invoice,
      items: invoiceData.items,
      subtotal: subtotal.toFixed(2),
      taxRate: invoiceData.taxRate,
      taxAmount: taxAmount.toFixed(2),
      total: total.toFixed(2),
      isWatermark,
    };

    // Read the HTML template
    const templatePath = path.join(
      process.cwd(),
      "public",
      "invoice-template.html"
    );
    const templateHtml = fs.readFileSync(templatePath, "utf8");

    // PDF generation options
    const options = {
      format: "A4",
      headerTemplate: "<p></p>",
      footerTemplate: "<p></p>",
      displayHeaderFooter: false,
      margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" },
      printBackground: true,
    };

    // Generate PDF
    const pdfBuffer = await html_to_pdf({ templateHtml, dataBinding, options });

    // Return the PDF as a response
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="invoice-${invoiceData.invoice.number}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

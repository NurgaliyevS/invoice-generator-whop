import { ImageUploader } from "@/app/components/image-uploader";
import { Settings } from "@/app/components/settings";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ experienceId: string }>;
}) {
  const { experienceId } = await params;
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">AI Alt Text Generator</h1>
          <Settings />
        </div>
        <p className="text-gray-600 mb-8">
          Automatically generate alt text for images.
        </p>
        <ImageUploader experienceId={experienceId} />
      </div>
    </main>
  );
}

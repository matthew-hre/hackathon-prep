import { Card } from "@/components/ui/card";

// Fake lecture content objects
const fakeLectureContents = [
  {
    id: "content-1",
    lectureId: "lecture-1",
    fileName: "Algebra_Basics.pdf",
    fileType: "application/pdf",
    fileSize: 102400, // in bytes
    fileUrl: "#",
    uploadedAt: "2025-01-29",
  },
  {
    id: "content-2",
    lectureId: "lecture-1",
    fileName: "Algebra_Notes.txt",
    fileType: "text/plain",
    fileSize: 2048,
    fileUrl: "#",
    uploadedAt: "2025-01-29",
  },
];

export default async function LecturePage({
  params,
}: {
  params: { courseId: string; lectureId: string };
}) {
  const lectureId = (await params).lectureId;
  const contents = fakeLectureContents.filter((c) => c.lectureId === lectureId);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Lecture: {lectureId}</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Uploaded Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contents.map((content) => (
            <Card key={content.id} className="p-4 hover:bg-muted space-y-1">
              <h3 className="text-xl font-medium">{content.fileName}</h3>
              <p className="text-xs text-muted-foreground font-mono">
                {content.fileType} - {Math.round(content.fileSize / 1024)} kB
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Upload New Files</h2>
        <div className="border-dashed border-2 border-muted p-8 text-center">
          <p>Drag &amp; drop files here or click to select</p>
          <p className="text-sm text-muted-foreground">
            Accepted formats: PDF, Word, MD, TXT, PPT
          </p>
        </div>
      </section>
    </div>
  );
}

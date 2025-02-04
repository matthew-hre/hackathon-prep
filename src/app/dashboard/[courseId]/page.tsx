import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AddContentModal } from "@/components/add-content-modal";
import { Paperclip } from "lucide-react";

// Fake lectures for a given course
const fakeLectures = [
  {
    id: "lecture-1",
    courseId: "course-1",
    title: "Algebra Basics",
    createdAt: "2025-01-29",
  },
  {
    id: "lecture-2",
    courseId: "course-1",
    title: "Advanced Algebra",
    createdAt: "2025-01-30",
  },
];

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const courseId = (await params).courseId;
  const lectures = fakeLectures.filter((l) => l.courseId === courseId);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-3xl font-bold">Course: {courseId}</h1>
        <AddContentModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lectures.map((lecture) => (
          <Link
            href={`/dashboard/${courseId}/${lecture.id}`}
            key={lecture.id}
            passHref
          >
            <Card className="p-4 bg-muted min-h-60 hover:border-muted-foreground/50 hover:shadow-lg transition space-y-2">
              <h2 className="text-2xl font-semibold">{lecture.title}</h2>
              <h3 className="text-xl font-medium">{lecture.createdAt}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Qui dolor ea esse mollit nisi quis ea veniam incididunt velit
                velit est. Irure consequat mollit esse cupidatat non commodo
                labore nostrud. Lorem ut quis cillum nulla aute magna sit
                ullamco ut qui. Enim esse veniam quis sint mollit quis voluptate
                commodo dolor esse.
              </p>
              {/* a little paperclip icon with the count of how many resources are attached */}
              <div className="flex items-center gap-2 text-muted-foreground pt-2">
                <Paperclip className="size-4" />
                <span className="font-mono text-sm">3 Resources</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

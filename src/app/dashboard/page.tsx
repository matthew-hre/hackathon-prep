import Link from "next/link";
import { Card } from "@/components/ui/card";

// Fake data
const fakeCourses = [
  { id: "course-1", title: "Mathematics 101", lastUpdated: "2025-01-30" },
  { id: "course-2", title: "History 202", lastUpdated: "2025-01-28" },
];

const fakeLectures = [
  { id: "lecture-1", courseId: "course-1", title: "Algebra Basics" },
  { id: "lecture-2", courseId: "course-2", title: "Medieval Europe" },
];

const fakeResources = [
  { id: "resource-1", lectureId: "lecture-1", title: "Quiz: Algebra Practice" },
  { id: "resource-2", lectureId: "lecture-2", title: "Flashcards: History" },
];

interface Course {
  id: string;
  title: string;
  lastUpdated: string;
}

interface Lecture {
  id: string;
  courseId: string;
  title: string;
}

interface Resource {
  id: string;
  lectureId: string;
  title: string;
}

interface CardItemProps {
  href: string;
  title: string;
  subtitle: string;
}

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <PageSection title="Recent Courses">
        {fakeCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </PageSection>

      <PageSection title="Recent Lectures">
        {fakeLectures.map((lecture) => (
          <LectureCard key={lecture.id} lecture={lecture} />
        ))}
      </PageSection>

      <PageSection title="Recent Resources">
        {fakeResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </PageSection>
    </div>
  );
}

export function PageSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-muted md:min-h-min p-4 space-y-4 border">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}

export function CardItem({ href, title, subtitle }: CardItemProps) {
  return (
    <Link href={href} passHref>
      <Card className="p-4 bg-muted min-h-60 hover:border-muted-foreground/50 hover:shadow-lg transition">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </Card>
    </Link>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <CardItem
      href={`/dashboard/${course.id}`}
      title={course.title}
      subtitle={`Last updated: ${course.lastUpdated}`}
    />
  );
}

export function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <CardItem
      href={`/dashboard/${lecture.courseId}/${lecture.id}`}
      title={lecture.title}
      subtitle={`Course: ${lecture.courseId}`}
    />
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <CardItem
      href={`/dashboard/resources/${resource.id}`}
      title={resource.title}
      subtitle={`Lecture: ${resource.lectureId}`}
    />
  );
}

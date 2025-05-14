import Tittle from "../Shared/Tittle";

export function OurStory({ story }: { story: { title: string; content: string } }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Tittle tittle={story.title} />
          <p className="text-lg text-gray-400 mt-4">{story?.content}</p>
        </div>
      </div>
    </section>
  );
}

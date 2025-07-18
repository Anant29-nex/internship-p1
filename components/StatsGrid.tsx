import blogData from "@/data/blogs.json";

const statsBlock = blogData.find((item) => item.id === "4");

const StatsGrid = () => {
  if (!statsBlock || !statsBlock.facts) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {statsBlock.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {statsBlock.facts.map((fact, index) => (
          <div key={index} className={fact.className}>
            <p className="mb-2">{fact.title}</p>
            {fact.highlight && (
              <p className={fact.highlightClass}>{fact.highlight}</p>
            )}
            <p className="mt-2">{fact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsGrid;

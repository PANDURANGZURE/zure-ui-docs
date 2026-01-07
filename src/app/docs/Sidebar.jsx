const categories = [
  {
    title: "Forms",
    components: [
      { name: "Input", href: "/docs/input" },
      { name: "Textarea", href: "/docs/textarea" },
    ],
  },
  {
    title: "Navigation",
    components: [
      { name: "Navbar", href: "/docs/navbar" },
      { name: "Sidebar", href: "/docs/sidebar" },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 p-6 bg-gray-50 border-r min-h-screen">
      {categories.map((cat) => (
        <div key={cat.title} className="mb-6">
          <h3 className="text-sm font-bold uppercase mb-2">{cat.title}</h3>
          <ul className="space-y-1">
            {cat.components.map((comp) => (
              <li key={comp.name}>
                <a href={comp.href} className="hover:text-blue-600">
                  {comp.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

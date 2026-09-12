import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSideBar";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previous) => previous.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <section
          id="technologies"
          className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Explore The{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "var(--tech-text)",
                  }}
                >
                  Technologies
                </span>
              </span>

              <p className="mx-auto mt-3 max-w-2xl text-gray-500 sm:mx-0">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-60 items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />
                  <p className="mt-4 text-sm text-gray-500">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
                <TechnologyGrid
                  technologies={technologies}
                  stack={stack}
                  onAdd={handleAdd}
                />

                <StackSidebar
                  stack={stack}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000}/>
    </div>
  );
}

export default App;

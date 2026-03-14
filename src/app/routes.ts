import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { LearningObjectives } from "./pages/LearningObjectives";
import { CourseSummary } from "./pages/CourseSummary";
import { Prologue } from "./pages/Prologue";
import { Section1 } from "./pages/Section1";
import { Section2 } from "./pages/Section2";
import { Section3 } from "./pages/Section3";
import { DesignSystem } from "./pages/DesignSystem";
import { QuickReference } from "./pages/QuickReference";
import { Bibliography } from "./pages/Bibliography";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "learning-objectives", Component: LearningObjectives },
      { path: "course-summary", Component: CourseSummary },
      { path: "prologue", Component: Prologue },
      { path: "section-1", Component: Section1 },
      { path: "section-2", Component: Section2 },
      { path: "section-3", Component: Section3 },
      { path: "design-system", Component: DesignSystem },
      { path: "quick-reference", Component: QuickReference },
      { path: "bibliography", Component: Bibliography },
    ],
  },
]);
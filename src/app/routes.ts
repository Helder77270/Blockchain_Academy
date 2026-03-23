import { createBrowserRouter, redirect } from "react-router";
import { AcademyRoot } from "./AcademyRoot";
import { Root } from "./Root";
import { BlockchainPlatformsRoot } from "./BlockchainPlatformsRoot";
import { SmartContractsRoot } from "./SmartContractsRoot";
import { CourseSelection } from "./pages/CourseSelection";
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
import { BlockchainPlatformsHome } from "./pages/blockchain-platforms/Home";
import { Section0 } from "./pages/blockchain-platforms/Section0";
import { BP_Section1 } from "./pages/blockchain-platforms/Section1";
import { BP_Section2 } from "./pages/blockchain-platforms/Section2";
import { BP_Section3 } from "./pages/blockchain-platforms/Section3";
import { BP_Section4 } from "./pages/blockchain-platforms/Section4";
import { Conclusion } from "./pages/blockchain-platforms/Conclusion";
import { SmartContractsHome } from "./pages/smart-contracts/Home";
import { SC_Section1 } from "./pages/smart-contracts/Section1";
import { SC_Section2 } from "./pages/smart-contracts/Section2";
import { SC_Section3 } from "./pages/smart-contracts/Section3";
import { SC_Section4 } from "./pages/smart-contracts/Section4";
import { SC_Section5 } from "./pages/smart-contracts/Section5";
import { SC_Conclusion } from "./pages/smart-contracts/Conclusion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AcademyRoot,
    children: [
      // Academy landing — course selection
      { index: true, Component: CourseSelection },

      // Course 01 — Blockchain Fundamentals
      {
        path: "blockchain-fundamentals",
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

      // Course 02 — Smart Contracts
      {
        path: "smart-contracts",
        Component: SmartContractsRoot,
        children: [
          { index: true, Component: SmartContractsHome },
          { path: "section-1", Component: SC_Section1 },
          { path: "section-2", Component: SC_Section2 },
          { path: "section-3", Component: SC_Section3 },
          { path: "section-4", Component: SC_Section4 },
          { path: "section-5", Component: SC_Section5 },
          { path: "conclusion", Component: SC_Conclusion },
        ],
      },

      // Course 03 — Blockchain Platforms
      {
        path: "blockchain-platforms",
        Component: BlockchainPlatformsRoot,
        children: [
          { index: true, Component: BlockchainPlatformsHome },
          { path: "section-0", Component: Section0 },
          { path: "section-1", Component: BP_Section1 },
          { path: "section-2", Component: BP_Section2 },
          { path: "section-3", Component: BP_Section3 },
          { path: "section-4", Component: BP_Section4 },
          { path: "conclusion", Component: Conclusion },
        ],
      },

      // Catch-all: any unknown path redirects to the academy landing
      { path: "*", loader: () => redirect("/") },
    ],
  },
]);

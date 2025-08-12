"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import Sidebar, { MenuItem } from "./components/Sidebar";

// Importa o crea componentes para cada sección
import ContentHome from "./components/ContentHome";
import ContentCreateProfile from "./components/ContentCreateProfile";
import ContentCategories from "./components/ContentCategories";
import ContentJobOffers from "./components/ContentJobOffers";
import ContentComments from "./components/ContentComments";
import ContentFAQ from "./components/ContentFAQ";
import ContentSponsors from "./components/ContentSponsors";
import ContentContact from "./components/ContentContact";
import ContentSocial from "./components/ContentSocial";
import ContentOurGoal from "./components/ContentOurGoal";
import ContentPrivacy from "./components/ContentPrivacy";
import ContentTerms from "./components/ContentTerms";

const contentMap: Record<MenuItem, JSX.Element> = {
  home: <ContentHome />,
  createProfile: <ContentCreateProfile />,
  services: <ContentCategories />,
  jobOffers: <ContentJobOffers />,
  comments: <ContentComments />,
  faq: <ContentFAQ />,
  sponsors: <ContentSponsors />,
  contact: <ContentContact />,
  social: <ContentSocial />,
  ourGoal: <ContentOurGoal />,
  privacy: <ContentPrivacy />,
  terms: <ContentTerms />,
};

export default function HomePage() {
  const [selected, setSelected] = useState<MenuItem>("home");

  return (
    <div className="flex min-h-screen">
      <Sidebar selected={selected} onSelect={setSelected} />
      <main className="flex-1 p-6 bg-gray-900">{contentMap[selected]}</main>
    </div>
  );
}

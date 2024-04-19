import React from "react";

function Links() {
  return (
    <div className="flex flex-col justify-center h-screen w-full bg-gradient-to-r from-rose-100 to-teal-100 py-80 overflow-auto">
      <div className="flex flex-col items-center min-h-screen">
        <div className="text-lg mb-4">
          <p>Here are some useful links:</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2>
            <b>Toys GRCs:</b>
          </h2>
          <a
            href="https://grc.fintech.amazon.dev/docs/Policy/176124/publication"
            className="text-blue-500 hover:underline"
          >
            APAC Classification GRC
          </a>
          <a
            href="https://policy.a2z.com/docs/609154/publication"
            className="text-blue-500 hover:underline"
          >
            NA Classification GRC
          </a>
          <a
            href="https://policy.a2z.com/docs/92300/publication"
            className="text-blue-500 hover:underline"
          >
            NA & APAC process GRC
          </a>
          <a
            href="https://policy.a2z.com/docs/88361/publication"
            className="text-blue-500 hover:underline"
          >
            EMEA Classification GRC
          </a>
          <a
            href="https://grc.fintech.amazon.dev/docs/Policy/176276/publication"
            className="text-blue-500 hover:underline"
          >
            EMEA Process GRC
          </a>
          <h2>
            <b>Food Safety GRCs:</b>
          </h2>
          <a
            href="https://policy.a2z.com/docs/179069/publication"
            className="text-blue-500 hover:underline"
          >
            FS Process GRC (DR+SA)
          </a>
          <a
            href="https://policy.a2z.com/docs/179872/publication"
            className="text-blue-500 hover:underline"
          >
            IN Supplements - FS IN MP SUPPLEMENTS (PROTEIN BASED & WEIGHT
            MANAGEMENT) DOCUMENT REVIEW & SELLER APPEALS SOP
          </a>
          <a
            href="https://policy.a2z.com/docs/179088/publication"
            className="text-blue-500 hover:underline"
          >
            IN Baby Food - FS IN MP BABY FOOD DOCUMENT REVIEW & SELLER APPEALS
            SOP
          </a>
          <a
            href="https://policy.a2z.com/docs/179031/publication"
            className="text-blue-500 hover:underline"
          >
            UK Supplements - Product Assurance Unified Seller Appeals SOP EMEA
            (Food Supplements, Infant Formula & Baby Food)
          </a>
          <a
            href="https://policy.a2z.com/docs/179072/publication"
            className="text-blue-500 hover:underline"
          >
            US Supplements - UFSC- Dietary (Sexual & Weight) Supplements
            Products - US MP
          </a>
          <a
            href="https://policy.a2z.com/docs/179071/publication"
            className="text-blue-500 hover:underline"
          >
            US Baby Food - UFSC- Baby Food Products - US MP
          </a>
          <a
            href="https://policy.a2z.com/docs/179070/publication"
            className="text-blue-500 hover:underline"
          >
            US Infant Formula - UFSC- Infant Formula Products - US MP
          </a>
          <a
            href="https://policy.a2z.com/docs/179713/publication"
            className="text-blue-500 hover:underline"
          >
            US SNBB - FS US MP HIGH RISK SPORTS NUTRITION & BODY BUILDING
            DOCUMENT REVIEW & SELLER APPEALS SOP
          </a>
          <a
            href="https://policy.a2z.com/docs/179287/publication"
            className="text-blue-500 hover:underline"
          >
            AU Supplements - AU Dietary Supplements Appeals SOP
          </a>
          <h3>
            <b>Important SIM folders:</b>
          </h3>
          <a
            href="https://issues.amazon.com/issues/search?q=status%3A(Open)+in%3A(1f85c869-f2ae-4bf8-bcc8-a02822fb40bf)&sort=lastUpdatedDate+desc&selectedDocument=f7f6e14f-a0b2-4bd9-aafa-72493df34813"
            className="text-blue-500 hover:underline"
          >
            Snowball SIMs raised to program (NA)
          </a>
          <a
            href="https://sim.amazon.com/issues/search?q=status%3A(Open)+in%3A(00be6467-5f05-45d4-9af5-4a591cbb5ac8)&sort=lastUpdatedDate+desc&selectedDocument=64ae89ac-8a99-443f-863e-c9e5de806dd9"
            className="text-blue-500 hover:underline"
          >
            General queries raised to program (NA & FS)
          </a>
          <h2>
            <b>Other links:</b>
          </h2>
          <a
            href="https://mytime-lite.aka.corp.amazon.com/wfcstatic/applications/navigator/html5/dist/container/index.html?version=8.1.7.1380#/"
            className="text-blue-500 hover:underline"
          >
            Kronos
          </a>
          <a
            href="https://argus.aka.amazon.com/#!/tracker/track"
            className="text-blue-500 hover:underline"
          >
            Argus
          </a>
          <a
            href="https://mytimeoff.corp.amazon.com/time_off"
            className="text-blue-500 hover:underline"
          >
            Time-Off
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;

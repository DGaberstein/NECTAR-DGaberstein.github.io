document.documentElement.classList.add("js-animate");

const header = document.querySelector(".site-header");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const animatedItems = document.querySelectorAll("[data-animate]");

const revealItem = (entry) => {
  const delay = Number(entry.target.dataset.delay || 0);
  if (delay) {
    entry.target.style.transitionDelay = `${delay}ms`;
  }
  entry.target.classList.add("is-visible");
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealItem(entry);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

const setFilter = (filter) => {
  productCards.forEach((card) => {
    const category = card.dataset.category;
    const isVisible = filter === "all" || category === filter;
    card.classList.toggle("is-hidden", !isVisible);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn === button);
      btn.setAttribute("aria-selected", btn === button ? "true" : "false");
    });
    setFilter(button.dataset.filter);
  });
});

const bgWrap = document.getElementById("bgWrap");
if (bgWrap) {
  const template = bgWrap.querySelector(".bg-icon");
  const total = 12;

  for (let i = 0; i < total; i += 1) {
    const clone = template.cloneNode(true);
    const scale = 0.35 + Math.random() * 1.1;
    const depth = Math.round((Math.random() * 280 - 140) * 10) / 10;
    const rotate = Math.round(Math.random() * 360);
    const rotateEnd = rotate + 120 + Math.random() * 180;
    const duration = 12 + Math.random() * 16;
    const delay = Math.random() * -12;
    const left = Math.random() * 120 - 10;

    clone.style.left = `${left}%`;
    clone.style.setProperty("--float-scale", scale);
    clone.style.setProperty("--float-depth", `${depth}px`);
    clone.style.setProperty("--float-rotate", `${rotate}deg`);
    clone.style.setProperty("--float-rotate-end", `${rotateEnd}deg`);
    clone.style.setProperty("--float-duration", `${duration}s`);
    clone.style.setProperty("--float-delay", `${delay}s`);
    clone.style.filter = `blur(${Math.max(0, depth / 40)}px) drop-shadow(0 0 20px rgba(120, 245, 196, 0.2))`;

    bgWrap.appendChild(clone);
  }

  template.remove();
}

const bubblesContainer = document.getElementById("bubbles");
if (bubblesContainer) {
  const totalBubbles = 24;

  for (let i = 0; i < totalBubbles; i += 1) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const leftOffset = Math.random() * 110 - 5;
    const radius = 20 + Math.random() * 120;
    const floatDuration = 8 + Math.random() * 10;
    const floatDelay = Math.random() * -10;
    const swayDuration = 3 + Math.random() * 5;
    const swayDelay = Math.random() * 4;
    const swayType = Math.random() > 0.5 ? "bubble-sway-left" : "bubble-sway-right";

    bubble.style.setProperty("--bubble-left-offset", `${leftOffset}vw`);
    bubble.style.setProperty("--bubble-radius", `${radius}px`);
    bubble.style.setProperty("--bubble-float-duration", `${floatDuration}s`);
    bubble.style.setProperty("--bubble-float-delay", `${floatDelay}s`);
    bubble.style.setProperty("--bubble-sway-duration", `${swayDuration}s`);
    bubble.style.setProperty("--bubble-sway-delay", `${swayDelay}s`);
    bubble.style.setProperty("--bubble-sway-type", swayType);

    bubblesContainer.appendChild(bubble);
  }
}

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobileNav");
if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-active");
    mobileNav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("is-active");
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

const translations = {
  de: {
    "nav.problem": "Problem",
    "nav.solution": "Lösung",
    "nav.benefits": "Vorteile",
    "nav.cultivation": "Anbau",
    "nav.products": "Produkte",
    "nav.pitch": "Pitch",
    "nav.contact": "Kontakt",
    "nav.cta": "Pilotphase starten",
    "hero.eyebrow": "FoodTech · Cannabis-Innovation",
    "hero.title": "Die Kraft von Cannabis.<br /><span>Die Reinheit von Wasser.</span>",
    "hero.lead": "NECTAR ist ein geschmacks- und geruchsneutrales Cannabis-Additiv in Form von Nano-Sticks oder Micro-Droplets. Dank Ghost-Infusion verschwindet Cannabis im Gericht – die Wirkung bleibt.",
    "hero.ctaPitch": "60‑Sekunden‑Pitch",
    "hero.ctaTech": "Technologie entdecken",
    "hero.meta.effect": "100 % Wirkung",
    "hero.meta.taste": "Ohne Geschmack, ohne Geruch.",
    "hero.meta.soluble": "Instant löslich",
    "hero.meta.use": "In Getränken, Saucen, Desserts.",
    "hero.meta.heat": "Hitze‑stabil",
    "hero.meta.kitchen": "Ideal für gehobene Küche.",
    "hero.meta.location": "Standort NL",
    "hero.meta.local": "Lokaler Anbau in den Niederlanden.",
    "hero.card.label": "Ghost‑Infusion Technology",
    "hero.card.title": "Unsichtbar. Präzise. Skalierbar.",
    "hero.card.item1": "Wasserlöslich & geruchlos",
    "hero.card.item2": "Mikroverkapselt auf Molekülebene",
    "hero.card.item3": "Kein Nachgeschmack",
    "company.eyebrow": "Unternehmen",
    "company.name": "NECTAR FoodTech B.V.",
    "company.lead": "Wir entwickeln Ghost‑Infusion‑Technologie für die Premium‑Gastronomie und den Lifestyle‑Food‑Sektor. Standort: Niederlande, lokaler Anbau, europäische Qualität.",
    "company.card1.title": "R&D",
    "company.card1.text": "Proprietäre Mikroverkapselung & Qualitätskontrolle.",
    "company.card2.title": "B2B",
    "company.card2.text": "Partnerschaften mit Gastronomie, Beverage & Wellness.",
    "problem.title": "Warum der Markt stockt",
    "problem.text": "70 % potenzielle Konsument:innen meiden Edibles wegen des erdigen, bitteren Geschmacks und des typischen Geruchs. Das Produkt wächst – der Geschmack hält zurück.",
    "problem.stat": "70 %",
    "problem.statText": "lehnen Edibles wegen Geschmack/Geruch ab.",
    "solution.title": "Die Lösung: NECTAR",
    "solution.text": "Unsere proprietäre Mikroverkapselung bindet Cannabinoide auf molekularer Ebene. Ergebnis: 100 % Wirkung, 0 % Beigeschmack. Wasserlöslich, geruchlos, hitzebeständig.",
    "solution.formats": "Formate",
    "solution.format1": "<strong>Nano‑Sticks</strong> – Pulver für präzises Dosieren",
    "solution.format2": "<strong>Micro‑Droplets</strong> – Flüssig für Drinks & Saucen",
    "benefits.title": "Vorteile für Food & Beverage",
    "benefits.item1.title": "Infused Dining",
    "benefits.item1.text": "Das Gericht schmeckt nach dem Koch, nicht nach der Pflanze.",
    "benefits.item2.title": "Premium‑Positionierung",
    "benefits.item2.text": "Passt in Sternerestaurants, Wellness‑Drinks und Lifestyle‑Foods.",
    "benefits.item3.title": "Skalierbare Technologie",
    "benefits.item3.text": "Nicht nur ein Produkt, sondern die Basis für neue Kategorien.",
    "benefits.item4.title": "Präzise Dosierung",
    "benefits.item4.text": "Konstante Wirkung für professionelle Anwendungen.",
    "cultivation.eyebrow": "Cultivation Intelligence",
    "cultivation.title": "Premium‑Anbau als Erlebnis",
    "cultivation.lead": "Präzise Beleuchtungs‑ und Nährstoffsteuerung, KI‑Optimierung und lückenlose Qualitätsmetriken – für eine unerreichte Luxus‑Qualität.",
    "cultivation.cert1": "Beispiel‑Zertifikat: GMP‑ready",
    "cultivation.cert2": "Beispiel‑Zertifikat: ISO‑Cleanroom",
    "cultivation.cert3": "Beispiel‑Zertifikat: AI‑Audit Trail",
    "cultivation.tab1": "Keimung",
    "cultivation.tab2": "Vegetativ",
    "cultivation.tab3": "Blüte",
    "cultivation.tab4": "Cure",
    "cultivation.step1.title": "Keimung & Start",
    "cultivation.step1.text": "Mikroklima mit 98 % Feuchte, sanfter Spektral‑Start und KI‑Seed‑Tracking für maximale Vitalität.",
    "cultivation.step2.title": "Vegetatives Wachstum",
    "cultivation.step2.text": "Dynamische LED‑Matrix, präzise EC‑Kurven und KI‑Feedback in Echtzeit – Wachstum ohne Stress.",
    "cultivation.step3.title": "Blüte & Potenz",
    "cultivation.step3.text": "Spektral‑Boost, präzise Photoperiode und KI‑Optimierung für gleichmäßige Wirkstoff‑Profile.",
    "cultivation.step4.title": "Cure & Finish",
    "cultivation.step4.text": "Kontrollierte Reifung mit KI‑gestützter Terpen‑Balance und perfekter Feuchte für samtige Qualität.",
    "cultivation.metric.light": "Lichtprofil",
    "cultivation.metric.nutrients": "Nährstoff‑Flow",
    "cultivation.metric.maturity": "Reifegrad",
    "cultivation.metric.stability": "Stabilität",
    "cultivation.chart.title": "Luxus‑Qualität (Beispiel)",
    "cultivation.chart.aroma": "Aroma",
    "cultivation.chart.purity": "Reinheit",
    "cultivation.chart.stability": "Stabilität",
    "cultivation.chart.terpenes": "Terpen‑Profil",
    "cultivation.gauge.label": "Luxus‑Score",
    "cultivation.gauge.note": "Beispielwert, verständlich visualisiert.",
    "products.title": "Premium‑Produktlinie",
    "products.lead": "Kuratierte Premium‑Kreationen für Signature‑Menüs, Private Dining und gehobene Events – alle mit unsichtbarer NECTAR‑Infusion.",
    "products.filter.all": "Alle",
    "products.filter.drinks": "Getränke",
    "products.filter.food": "Essen",
    "products.filter.experience": "Rauschzeug",
    "products.cta": "Jetzt kaufen",
    "products.shop": "Shop",
    "products.truffle.eyebrow": "Limited Infusion",
    "products.truffle.lead": "Exklusive Trüffel‑Kreation mit präziser Dosierung. Luxuriös im Geschmack, neutral in der Infusion.",
    "products.truffle.item1": "Hochwertige Trüffel‑Basis",
    "products.truffle.item2": "Geruchsneutral & fein abgestimmt",
    "products.truffle.item3": "Ideal für Signature‑Menüs & Events",
    "products.whitegold.eyebrow": "Chef Selection",
    "products.whitegold.lead": "Cremiger Reis, feine Umami‑Noten, komplett frei von Cannabis‑Aroma.",
    "products.whitegold.item1": "Sanfte Wirkung, elegante Textur",
    "products.whitegold.item2": "Perfekt als Hauptgang",
    "products.whitegold.item3": "Fein dosierbar pro Portion",
    "products.velvet.eyebrow": "Beverage",
    "products.velvet.lead": "Elegante Spritz‑Edition für Wellness‑Lounges & Premium‑Bars.",
    "products.velvet.item1": "Kristallklar & geruchlos",
    "products.velvet.item2": "Stabile Infusion in Drinks",
    "products.velvet.item3": "Signature‑Garnish optional",
    "products.midnight.eyebrow": "Dessert",
    "products.midnight.lead": "Dunkle Schokolade trifft dezente Infusion – ohne Nachgeschmack.",
    "products.midnight.item1": "Temperatur‑stabil",
    "products.midnight.item2": "Präzise Wirkstufen",
    "products.midnight.item3": "Ideal für Tasting‑Menüs",
    "products.ghostdose.eyebrow": "Experience",
    "products.ghostdose.lead": "Präzise Einzeldosis für kontrollierte Wirkung – neutral im Geschmack.",
    "products.ghostdose.item1": "Instant löslich",
    "products.ghostdose.item2": "Diskret & geruchlos",
    "products.ghostdose.item3": "Ideal für Micro‑Dosing",
    "products.microshot.eyebrow": "Experience",
    "products.microshot.lead": "Flüssige Einzeldosis für kalkulierbares Erlebnis – ohne Cannabis‑Aroma.",
    "products.microshot.item1": "Stabile Emulsion",
    "products.microshot.item2": "Präzise Wirkstufen",
    "products.microshot.item3": "Für Lounge‑ und Event‑Settings",
    "pitch.title": "60‑Sekunden‑Pitch",
    "pitch.hook.title": "Hook",
    "pitch.hook.text": "Wussten Sie, dass 70 % der potenziellen Cannabis‑Konsument:innen keine Edibles kaufen, weil sie den Geschmack und Geruch hassen?",
    "pitch.problem.title": "Problem",
    "pitch.problem.text": "Herkömmliche Cannabis‑Lebensmittel ruinieren das kulinarische Erlebnis – der Nachgeschmack bleibt Stunden.",
    "pitch.solution.title": "Lösung",
    "pitch.solution.text": "NECTAR kapselt Cannabinoide mikroverkapselt ein. 100 % Wirkung, 0 % Beigeschmack. Wasserlöslich, geruchlos, hitzebeständig.",
    "pitch.market.title": "Markt/Vorteil",
    "pitch.market.text": "Technologie für die nächste Generation von Food & Beverage – von Sternegastronomie bis Wellness‑Limo.",
    "pitch.cta.title": "Call to Action",
    "pitch.cta.text": "Wir machen Cannabis unsichtbar, damit der Genuss im Vordergrund steht. Sprechen wir nächste Woche über die Pilotphase?",
    "contact.title": "Bereit für die Pilotphase?",
    "contact.text": "Lassen Sie uns die nächste Generation von Cannabis‑FoodTech definieren. Schreiben Sie uns für ein Gespräch über Piloten, Zusammenarbeit und Skalierung.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Ihr Name",
    "contact.email": "E‑Mail",
    "contact.emailPlaceholder": "name@beispiel.de",
    "contact.message": "Nachricht",
    "contact.messagePlaceholder": "Woran sind Sie interessiert?",
    "contact.button": "Pilotphase anfragen",
    "contact.send": "Nachricht senden",
    "reviews.title": "Bewertungen",
    "reviews.lead": "Fiktive Stimmen zur Illustration des Premium‑Erlebnisses.",
    "reviews.score": "Beispiel‑Score",
    "reviews.item1.text": "“Das Gericht bleibt kulinarisch pur – die Wirkung ist präzise.”",
    "reviews.item1.meta": "Signature Dining · Beispielbewertung",
    "reviews.item2.text": "“Endlich eine Infusion, die unsere Drink‑Profile nicht verändert.”",
    "reviews.item2.meta": "Wellness‑Lounge · Beispielbewertung",
    "reviews.item3.text": "“Premium‑Erlebnis ohne Nachgeschmack – genau das fehlte.”",
    "reviews.item3.meta": "Private Events · Beispielbewertung",
    "reviews.item4.text": "“Konstante Dosierung, die in der Küche wirklich planbar ist.”",
    "reviews.item4.meta": "Chef Collaboration · Beispielbewertung",
    "reviews.item5.text": "“Premium‑Infusion ohne Geruch – perfekt für unsere Signature‑Drinks.”",
    "reviews.item5.meta": "Beverage Lab · Beispielbewertung",
    "reviews.item6.text": "“Die Qualität wirkt wie ein Standard für die nächste Generation.”",
    "reviews.item6.meta": "FoodTech Partner · Beispielbewertung",
    "footer.tagline": "FoodTech · Cannabis‑Innovation",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.contact": "Kontakt",
    "footer.terms": "AGB",
    "common.source": "Quelle",
    "catalog.title": "Produktkatalog",
    "catalog.lead": "Wählen Sie eine Premium‑Kreation und senden Sie Ihre Anfrage für Verfügbarkeit, Preise und Pilot‑Kontingente.",
    "catalog.notice": "<strong>Hinweis:</strong> Bestelllimit pro Versand: maximal 5 g. Lieferung erfolgt per Drohne (Pilotbetrieb).",
    "catalog.cta": "Anfrage senden",
    "catalog.truffle": "Limited Infusion · Hochwertige Trüffel‑Basis",
    "catalog.truffle.title": "Trüffel Cannabis",
    "catalog.whitegold.title": "White‑Gold Risotto",
    "catalog.velvet.title": "Velvet Sparkling",
    "catalog.midnight.title": "Midnight Ganache",
    "catalog.ghostdose.title": "Ghost‑Dose Nano‑Stick",
    "catalog.microshot.title": "Micro‑Droplet Shot",
    "catalog.whitegold.pill": "White‑Gold",
    "catalog.velvet.pill": "Velvet",
    "catalog.midnight.pill": "Midnight",
    "catalog.ghostdose.pill": "Ghost‑Dose",
    "catalog.microshot.pill": "Micro‑Shot",
    "catalog.pill": "Premium",
    "catalog.whitegold": "Chef Selection · Feine Umami‑Noten",
    "catalog.velvet": "Beverage · Kristallklar & geruchlos",
    "catalog.midnight": "Dessert · Temperatur‑stabil",
    "catalog.ghostdose": "Experience · Präzise Einzeldosis",
    "catalog.microshot": "Experience · Flüssige Einzeldosis",
    "legal.imprint.title": "Impressum",
    "legal.imprint.lead": "Angaben gemäß den gesetzlichen Anforderungen.",
    "legal.privacy.title": "Datenschutz",
    "legal.privacy.lead": "Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten auf dieser Website.",
    "legal.contact.title": "Kontakt",
    "legal.contact.lead": "Schreiben Sie uns zu Pilotprojekten, Kooperationen oder Presseanfragen.",
    "legal.terms.title": "Allgemeine Geschäftsbedingungen (AGB)",
    "legal.terms.lead": "Diese AGB gelten für Anfragen, Angebote und Pilotprojekte von NECTAR FoodTech B.V.",
    "legal.imprint.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Niederlande",
    "legal.imprint.register": "Vertretungsberechtigt: [Name]<br />Handelsregister: [Registergericht, Nummer]<br />USt‑ID: [Nummer]",
    "legal.imprint.contactLabel": "Kontakt:",
    "legal.contact.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Niederlande",
    "legal.contact.emailLabel": "E‑Mail:",
    "legal.contact.phoneLabel": "Telefon:",
    "legal.privacy.section1.title": "1. Verantwortlicher",
    "legal.privacy.section1.address": "NECTAR FoodTech B.V.<br />De Wallen, Amsterdam, Niederlande",
    "legal.privacy.section1.emailLabel": "E‑Mail:",
    "legal.privacy.section2.title": "2. Allgemeine Hinweise",
    "legal.privacy.section2.text": "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Kommunikation mit Ihnen oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
    "legal.privacy.section3.title": "3. Datenverarbeitung beim Besuch der Website",
    "legal.privacy.section3.text": "Beim Aufruf der Website werden durch den Webserver automatisch Informationen (z.&nbsp;B. IP‑Adresse, Datum/ Uhrzeit, aufgerufene Seiten, Browser‑Typ) in Server‑Logfiles verarbeitet. Die Verarbeitung erfolgt zur technischen Bereitstellung, Sicherheit und Fehleranalyse der Website.",
    "legal.privacy.section4.title": "4. Kontaktaufnahme",
    "legal.privacy.section4.text": "Wenn Sie uns per E‑Mail oder über das Kontaktformular kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage. Die Daten werden gelöscht, sobald sie nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
    "legal.privacy.section5.title": "5. Cookies",
    "legal.privacy.section5.text": "Diese Website verwendet nur technisch notwendige Cookies, sofern solche durch die eingesetzten Systeme gesetzt werden. Eine darüber hinausgehende Nutzung von Cookies (z.&nbsp;B. Tracking/Marketing) findet nicht statt.",
    "legal.privacy.section6.title": "6. Rechtsgrundlagen",
    "legal.privacy.section6.text": "Die Verarbeitung erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website) sowie Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Anfragebearbeitung).",
    "legal.privacy.section7.title": "7. Empfänger",
    "legal.privacy.section7.text": "Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Bereitstellung der Website erforderlich ist (z.&nbsp;B. Hosting‑Dienstleister) oder eine gesetzliche Verpflichtung besteht.",
    "legal.privacy.section8.title": "8. Speicherdauer",
    "legal.privacy.section8.text": "Server‑Logfiles werden regelmäßig gelöscht. Kontaktdaten werden gelöscht, sobald der Zweck der Verarbeitung entfällt, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    "legal.privacy.section9.title": "9. Ihre Rechte",
    "legal.privacy.section9.text": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.",
    "legal.privacy.section10.title": "10. Kontakt zum Datenschutz",
    "legal.privacy.section10.text": "Für Datenschutzanfragen kontaktieren Sie uns unter",
    "legal.terms.section1.title": "1. Geltungsbereich",
    "legal.terms.section1.text": "Diese AGB gelten für alle Geschäftsbeziehungen mit NECTAR FoodTech B.V. Abweichende Bedingungen gelten nur, wenn sie schriftlich bestätigt wurden.",
    "legal.terms.section2.title": "2. Leistungen",
    "legal.terms.section2.text": "Wir bieten Produktinformationen, Muster/Pilotkontingente sowie technologiebezogene Leistungen für Food &amp; Beverage an.",
    "legal.terms.section3.title": "3. Preise &amp; Zahlung",
    "legal.terms.section3.text": "Preise ergeben sich aus dem jeweiligen Angebot. Zahlungen erfolgen gemäß vereinbarter Zahlungsbedingungen.",
    "legal.terms.section4.title": "4. Haftung",
    "legal.terms.section4.text": "Es gelten die gesetzlichen Haftungsbestimmungen. Eine Haftung für entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.",
    "legal.terms.section5.title": "5. Schlussbestimmungen",
    "legal.terms.section5.text": "Es gilt das Recht der Niederlande. Gerichtsstand ist, soweit zulässig, der Sitz des Unternehmens in Amsterdam.",
    "cultivation.benchmark.eyebrow": "Benchmark & Quellen",
    "cultivation.benchmark.title": "Validierte Anbau‑Rahmenwerte",
    "cultivation.benchmark.lead": "Öffentliche Datenpunkte aus der Fachliteratur als Referenz für kontrollierte Kultivierung. Werte sind sorten‑ und standortabhängig.",
    "cultivation.benchmark.temp.title": "Temperatur (Tag)",
    "cultivation.benchmark.temp.note": "Empfohlener Tagesbereich für Wachstum.",
    "cultivation.benchmark.humidity.title": "Luftfeuchte",
    "cultivation.benchmark.humidity.note": "Typischer Optimalbereich für Wachstum.",
    "cultivation.benchmark.light.title": "Lichtzyklus (Vegetativ)",
    "cultivation.benchmark.light.note": "Längere Photoperiode fördert Vegetativ‑Wachstum.",
    "cultivation.benchmark.flower.title": "Blüte‑Trigger",
    "cultivation.benchmark.flower.note": "Dunkelphase induziert Blüte bei Photoperiod‑Sorten.",
    "cultivation.benchmark.ph.title": "Substrat‑pH",
    "cultivation.benchmark.ph.note": "Zielbereich für Nährstoffverfügbarkeit.",
    "cultivation.cea.title": "CEA‑Steuergrößen (Controlled‑Environment Agriculture)",
    "cultivation.cea.item1": "Temperatur (Luft, Wurzelzone)",
    "cultivation.cea.item2": "Relative Luftfeuchte (RH)",
    "cultivation.cea.item3": "CO2‑Gehalt",
    "cultivation.cea.item4": "Licht (Intensität, Spektrum, Dauer)",
    "cultivation.cea.item5": "Nährstoff‑Konzentration und pH‑Wert",
    "cultivation.cea.item6": "Pflanzdichte & Kulturdauer",
    "cultivation.sources.title": "Quellen"
  },
  en: {
    "nav.problem": "Problem",
    "nav.solution": "Solution",
    "nav.benefits": "Benefits",
    "nav.cultivation": "Cultivation",
    "nav.products": "Products",
    "nav.pitch": "Pitch",
    "nav.contact": "Contact",
    "nav.cta": "Start pilot",
    "hero.eyebrow": "FoodTech · Cannabis Innovation",
    "hero.title": "The Power of Cannabis.<br /><span>The Purity of Water.</span>",
    "hero.lead": "NECTAR is a taste‑ and odor‑neutral cannabis additive in nano‑sticks or micro‑droplets. Ghost‑Infusion makes cannabis invisible in the dish—only the effect remains.",
    "hero.ctaPitch": "60‑second pitch",
    "hero.ctaTech": "Discover the technology",
    "hero.meta.effect": "100% effect",
    "hero.meta.taste": "No taste, no odor.",
    "hero.meta.soluble": "Instant soluble",
    "hero.meta.use": "In drinks, sauces, desserts.",
    "hero.meta.heat": "Heat‑stable",
    "hero.meta.kitchen": "Ideal for fine dining.",
    "hero.meta.location": "Location NL",
    "hero.meta.local": "Local cultivation in the Netherlands.",
    "hero.card.label": "Ghost‑Infusion Technology",
    "hero.card.title": "Invisible. Precise. Scalable.",
    "hero.card.item1": "Water‑soluble & odorless",
    "hero.card.item2": "Micro‑encapsulated on a molecular level",
    "hero.card.item3": "No aftertaste",
    "company.eyebrow": "Company",
    "company.name": "NECTAR FoodTech B.V.",
    "company.lead": "We develop Ghost‑Infusion technology for premium gastronomy and lifestyle food. Location: Netherlands, local cultivation, European quality.",
    "company.card1.title": "R&D",
    "company.card1.text": "Proprietary micro‑encapsulation & quality control.",
    "company.card2.title": "B2B",
    "company.card2.text": "Partnerships with gastronomy, beverage & wellness.",
    "problem.title": "Why the market stalls",
    "problem.text": "70% of potential consumers avoid edibles because of the earthy, bitter taste and typical odor. The market grows—taste holds it back.",
    "problem.stat": "70%",
    "problem.statText": "reject edibles due to taste/odor.",
    "solution.title": "The solution: NECTAR",
    "solution.text": "Our proprietary micro‑encapsulation binds cannabinoids on a molecular level. Result: 100% effect, 0% aftertaste. Water‑soluble, odorless, heat‑stable.",
    "solution.formats": "Formats",
    "solution.format1": "<strong>Nano‑sticks</strong> – powder for precise dosing",
    "solution.format2": "<strong>Micro‑droplets</strong> – liquid for drinks & sauces",
    "benefits.title": "Benefits for Food & Beverage",
    "benefits.item1.title": "Infused Dining",
    "benefits.item1.text": "The dish tastes like the chef, not the plant.",
    "benefits.item2.title": "Premium positioning",
    "benefits.item2.text": "Fits fine dining, wellness drinks and lifestyle foods.",
    "benefits.item3.title": "Scalable technology",
    "benefits.item3.text": "Not just a product, but a platform for new categories.",
    "benefits.item4.title": "Precise dosing",
    "benefits.item4.text": "Consistent effect for professional use.",
    "cultivation.eyebrow": "Cultivation Intelligence",
    "cultivation.title": "Premium cultivation as an experience",
    "cultivation.lead": "Precise lighting and nutrient control, AI optimization and end‑to‑end quality metrics—for unrivaled luxury quality.",
    "cultivation.cert1": "Sample certificate: GMP‑ready",
    "cultivation.cert2": "Sample certificate: ISO cleanroom",
    "cultivation.cert3": "Sample certificate: AI audit trail",
    "cultivation.tab1": "Germination",
    "cultivation.tab2": "Vegetative",
    "cultivation.tab3": "Flowering",
    "cultivation.tab4": "Cure",
    "cultivation.step1.title": "Germination & start",
    "cultivation.step1.text": "Micro‑climate at 98% humidity, gentle spectral start and AI seed tracking for maximum vitality.",
    "cultivation.step2.title": "Vegetative growth",
    "cultivation.step2.text": "Dynamic LED matrix, precise EC curves and AI feedback in real time—growth without stress.",
    "cultivation.step3.title": "Flowering & potency",
    "cultivation.step3.text": "Spectral boost, precise photoperiod and AI optimization for consistent compound profiles.",
    "cultivation.step4.title": "Cure & finish",
    "cultivation.step4.text": "Controlled maturation with AI‑guided terpene balance and perfect humidity for velvety quality.",
    "cultivation.metric.light": "Light profile",
    "cultivation.metric.nutrients": "Nutrient flow",
    "cultivation.metric.maturity": "Maturity",
    "cultivation.metric.stability": "Stability",
    "cultivation.chart.title": "Luxury quality (sample)",
    "cultivation.chart.aroma": "Aroma",
    "cultivation.chart.purity": "Purity",
    "cultivation.chart.stability": "Stability",
    "cultivation.chart.terpenes": "Terpene profile",
    "cultivation.gauge.label": "Luxury score",
    "cultivation.gauge.note": "Sample value, clearly visualized.",
    "products.title": "Premium product line",
    "products.lead": "Curated premium creations for signature menus, private dining and upscale events—all with invisible NECTAR infusion.",
    "products.filter.all": "All",
    "products.filter.drinks": "Drinks",
    "products.filter.food": "Food",
    "products.filter.experience": "Experience",
    "products.cta": "Buy now",
    "products.shop": "Shop",
    "products.truffle.eyebrow": "Limited Infusion",
    "products.truffle.lead": "Exclusive truffle creation with precise dosing. Luxurious in flavor, neutral in infusion.",
    "products.truffle.item1": "Premium truffle base",
    "products.truffle.item2": "Odorless & finely tuned",
    "products.truffle.item3": "Ideal for signature menus & events",
    "products.whitegold.eyebrow": "Chef Selection",
    "products.whitegold.lead": "Creamy rice, fine umami notes, completely free of cannabis aroma.",
    "products.whitegold.item1": "Gentle effect, elegant texture",
    "products.whitegold.item2": "Perfect as a main course",
    "products.whitegold.item3": "Precisely dosed per portion",
    "products.velvet.eyebrow": "Beverage",
    "products.velvet.lead": "Elegant spritz edition for wellness lounges & premium bars.",
    "products.velvet.item1": "Crystal clear & odorless",
    "products.velvet.item2": "Stable infusion in drinks",
    "products.velvet.item3": "Signature garnish optional",
    "products.midnight.eyebrow": "Dessert",
    "products.midnight.lead": "Dark chocolate meets a subtle infusion—no aftertaste.",
    "products.midnight.item1": "Temperature stable",
    "products.midnight.item2": "Precise effect levels",
    "products.midnight.item3": "Ideal for tasting menus",
    "products.ghostdose.eyebrow": "Experience",
    "products.ghostdose.lead": "Precise single dose for controlled effects—neutral in taste.",
    "products.ghostdose.item1": "Instant soluble",
    "products.ghostdose.item2": "Discrete & odorless",
    "products.ghostdose.item3": "Ideal for micro‑dosing",
    "products.microshot.eyebrow": "Experience",
    "products.microshot.lead": "Liquid single dose for a predictable experience—no cannabis aroma.",
    "products.microshot.item1": "Stable emulsion",
    "products.microshot.item2": "Precise effect levels",
    "products.microshot.item3": "For lounge & event settings",
    "pitch.title": "60‑second pitch",
    "pitch.hook.title": "Hook",
    "pitch.hook.text": "Did you know that 70% of potential cannabis consumers avoid edibles because they hate the taste and smell?",
    "pitch.problem.title": "Problem",
    "pitch.problem.text": "Traditional cannabis foods ruin the culinary experience—the aftertaste lingers for hours.",
    "pitch.solution.title": "Solution",
    "pitch.solution.text": "NECTAR micro‑encapsulates cannabinoids. 100% effect, 0% aftertaste. Water‑soluble, odorless, heat‑stable.",
    "pitch.market.title": "Market/edge",
    "pitch.market.text": "Technology for the next generation of food & beverage—from fine dining to wellness soda.",
    "pitch.cta.title": "Call to Action",
    "pitch.cta.text": "We make cannabis invisible so the enjoyment comes first. Shall we discuss the pilot next week?",
    "contact.title": "Ready for the pilot phase?",
    "contact.text": "Let’s define the next generation of cannabis foodtech. Reach out for pilots, collaboration and scaling.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "name@example.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "What are you interested in?",
    "contact.button": "Request pilot phase",
    "contact.send": "Send message",
    "reviews.title": "Reviews",
    "reviews.lead": "Fictional voices to illustrate the premium experience.",
    "reviews.score": "Sample score",
    "reviews.item1.text": "“The dish stays culinary‑pure—the effect is precise.”",
    "reviews.item1.meta": "Signature Dining · Sample review",
    "reviews.item2.text": "“Finally an infusion that doesn’t alter our drink profiles.”",
    "reviews.item2.meta": "Wellness Lounge · Sample review",
    "reviews.item3.text": "“Premium experience without aftertaste—exactly what was missing.”",
    "reviews.item3.meta": "Private Events · Sample review",
    "reviews.item4.text": "“Consistent dosing that is truly predictable in the kitchen.”",
    "reviews.item4.meta": "Chef Collaboration · Sample review",
    "reviews.item5.text": "“Odorless premium infusion—perfect for our signature drinks.”",
    "reviews.item5.meta": "Beverage Lab · Sample review",
    "reviews.item6.text": "“Quality that feels like a new standard.”",
    "reviews.item6.meta": "FoodTech Partner · Sample review",
    "footer.tagline": "FoodTech · Cannabis Innovation",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.terms": "Terms",
    "common.source": "Source",
    "catalog.title": "Product catalog",
    "catalog.lead": "Choose a premium creation and send your request for availability, pricing and pilot allocations.",
    "catalog.notice": "<strong>Note:</strong> Order limit per shipment: maximum 5 g. Delivery by drone (pilot).",
    "catalog.cta": "Send inquiry",
    "catalog.truffle": "Limited Infusion · Premium truffle base",
    "catalog.truffle.title": "Truffle Cannabis",
    "catalog.whitegold.title": "White‑Gold Risotto",
    "catalog.velvet.title": "Velvet Sparkling",
    "catalog.midnight.title": "Midnight Ganache",
    "catalog.ghostdose.title": "Ghost‑Dose Nano Stick",
    "catalog.microshot.title": "Micro‑Droplet Shot",
    "catalog.whitegold.pill": "White‑Gold",
    "catalog.velvet.pill": "Velvet",
    "catalog.midnight.pill": "Midnight",
    "catalog.ghostdose.pill": "Ghost‑Dose",
    "catalog.microshot.pill": "Micro‑Shot",
    "catalog.pill": "Premium",
    "catalog.whitegold": "Chef Selection · Fine umami notes",
    "catalog.velvet": "Beverage · Crystal clear & odorless",
    "catalog.midnight": "Dessert · Temperature stable",
    "catalog.ghostdose": "Experience · Precise single dose",
    "catalog.microshot": "Experience · Liquid single dose",
    "legal.imprint.title": "Imprint",
    "legal.imprint.lead": "Information in accordance with legal requirements.",
    "legal.privacy.title": "Privacy",
    "legal.privacy.lead": "This privacy policy informs you about the processing of personal data on this website.",
    "legal.contact.title": "Contact",
    "legal.contact.lead": "Contact us for pilot projects, partnerships or press inquiries.",
    "legal.terms.title": "Terms & Conditions",
    "legal.terms.lead": "These terms apply to inquiries, offers, and pilot projects of NECTAR FoodTech B.V.",
    "legal.imprint.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Netherlands",
    "legal.imprint.register": "Represented by: [Name]<br />Trade register: [Court, number]<br />VAT ID: [Number]",
    "legal.imprint.contactLabel": "Contact:",
    "legal.contact.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Netherlands",
    "legal.contact.emailLabel": "Email:",
    "legal.contact.phoneLabel": "Phone:",
    "legal.privacy.section1.title": "1. Controller",
    "legal.privacy.section1.address": "NECTAR FoodTech B.V.<br />De Wallen, Amsterdam, Netherlands",
    "legal.privacy.section1.emailLabel": "Email:",
    "legal.privacy.section2.title": "2. General information",
    "legal.privacy.section2.text": "We process personal data only insofar as this is necessary to provide this website, communicate with you, or comply with legal obligations.",
    "legal.privacy.section3.title": "3. Data processing when visiting the website",
    "legal.privacy.section3.text": "When you access the website, the web server automatically processes information (e.g. IP address, date/time, pages accessed, browser type) in server log files. Processing is for technical provision, security, and error analysis of the website.",
    "legal.privacy.section4.title": "4. Contacting us",
    "legal.privacy.section4.text": "If you contact us by email or via the contact form, we process your information to handle the inquiry. Data is deleted once it is no longer required, unless statutory retention obligations apply.",
    "legal.privacy.section5.title": "5. Cookies",
    "legal.privacy.section5.text": "This website uses only technically necessary cookies if such are set by the systems used. No additional use of cookies (e.g. tracking/marketing) takes place.",
    "legal.privacy.section6.title": "6. Legal bases",
    "legal.privacy.section6.text": "Processing is based on Art. 6(1)(f) GDPR (legitimate interest in the secure provision of the website) and Art. 6(1)(b) GDPR (handling inquiries).",
    "legal.privacy.section7.title": "7. Recipients",
    "legal.privacy.section7.text": "Your data is only shared with third parties if necessary to provide the website (e.g. hosting providers) or if there is a legal obligation.",
    "legal.privacy.section8.title": "8. Storage duration",
    "legal.privacy.section8.text": "Server log files are regularly deleted. Contact data is deleted once the purpose of processing no longer applies, unless statutory retention obligations apply.",
    "legal.privacy.section9.title": "9. Your rights",
    "legal.privacy.section9.text": "You have the right to access, rectification, erasure, restriction of processing, data portability, and to object to processing. You also have the right to lodge a complaint with a supervisory authority.",
    "legal.privacy.section10.title": "10. Privacy contact",
    "legal.privacy.section10.text": "For privacy inquiries, please contact us at",
    "legal.terms.section1.title": "1. Scope",
    "legal.terms.section1.text": "These terms apply to all business relationships with NECTAR FoodTech B.V. Deviating terms apply only if confirmed in writing.",
    "legal.terms.section2.title": "2. Services",
    "legal.terms.section2.text": "We provide product information, samples/pilot allocations and technology-related services for food &amp; beverage.",
    "legal.terms.section3.title": "3. Prices &amp; payment",
    "legal.terms.section3.text": "Prices are based on the respective offer. Payments are made according to agreed payment terms.",
    "legal.terms.section4.title": "4. Liability",
    "legal.terms.section4.text": "Statutory liability provisions apply. Liability for lost profits is excluded to the extent permitted by law.",
    "legal.terms.section5.title": "5. Final provisions",
    "legal.terms.section5.text": "Dutch law applies. Jurisdiction is, where permissible, the company’s registered office in Amsterdam.",
    "cultivation.benchmark.eyebrow": "Benchmark & Sources",
    "cultivation.benchmark.title": "Validated Cultivation Benchmarks",
    "cultivation.benchmark.lead": "Public data points from the literature as references for controlled cultivation. Values depend on cultivar and site.",
    "cultivation.benchmark.temp.title": "Temperature (Day)",
    "cultivation.benchmark.temp.note": "Recommended daytime range for growth.",
    "cultivation.benchmark.humidity.title": "Humidity",
    "cultivation.benchmark.humidity.note": "Typical optimal range for growth.",
    "cultivation.benchmark.light.title": "Light Cycle (Vegetative)",
    "cultivation.benchmark.light.note": "Longer photoperiod promotes vegetative growth.",
    "cultivation.benchmark.flower.title": "Flowering Trigger",
    "cultivation.benchmark.flower.note": "Dark period induces flowering in photoperiod cultivars.",
    "cultivation.benchmark.ph.title": "Substrate pH",
    "cultivation.benchmark.ph.note": "Target range for nutrient availability.",
    "cultivation.cea.title": "CEA Control Variables (Controlled‑Environment Agriculture)",
    "cultivation.cea.item1": "Temperature (air, root zone)",
    "cultivation.cea.item2": "Relative humidity (RH)",
    "cultivation.cea.item3": "CO2 concentration",
    "cultivation.cea.item4": "Light (intensity, spectrum, duration)",
    "cultivation.cea.item5": "Nutrient concentration and pH",
    "cultivation.cea.item6": "Plant density & crop duration",
    "cultivation.sources.title": "Sources"
  },
  nl: {
    "nav.problem": "Probleem",
    "nav.solution": "Oplossing",
    "nav.benefits": "Voordelen",
    "nav.cultivation": "Teelt",
    "nav.products": "Producten",
    "nav.pitch": "Pitch",
    "nav.contact": "Contact",
    "nav.cta": "Start pilot",
    "hero.eyebrow": "FoodTech · Cannabis‑innovatie",
    "hero.title": "De kracht van cannabis.<br /><span>De zuiverheid van water.</span>",
    "hero.lead": "NECTAR is een smaak‑ en geurloos cannabis‑additief in nano‑sticks of micro‑droplets. Ghost‑Infusion maakt cannabis onzichtbaar in het gerecht—alleen het effect blijft.",
    "hero.ctaPitch": "60‑seconden‑pitch",
    "hero.ctaTech": "Ontdek de technologie",
    "hero.meta.effect": "100% effect",
    "hero.meta.taste": "Geen smaak, geen geur.",
    "hero.meta.soluble": "Direct oplosbaar",
    "hero.meta.use": "In dranken, sauzen, desserts.",
    "hero.meta.heat": "Hittebestendig",
    "hero.meta.kitchen": "Ideaal voor fine dining.",
    "hero.meta.location": "Locatie NL",
    "hero.meta.local": "Lokale teelt in Nederland.",
    "hero.card.label": "Ghost‑Infusion Technology",
    "hero.card.title": "Onzichtbaar. Nauwkeurig. Schaalbaar.",
    "hero.card.item1": "Wateroplosbaar & geurloos",
    "hero.card.item2": "Micro‑ingekapseld op moleculair niveau",
    "hero.card.item3": "Geen nasmaak",
    "company.eyebrow": "Bedrijf",
    "company.name": "NECTAR FoodTech B.V.",
    "company.lead": "Wij ontwikkelen Ghost‑Infusion‑technologie voor premium gastronomie en lifestyle food. Locatie: Nederland, lokale teelt, Europese kwaliteit.",
    "company.card1.title": "R&D",
    "company.card1.text": "Eigen micro‑inkapseling & kwaliteitscontrole.",
    "company.card2.title": "B2B",
    "company.card2.text": "Partnerschappen met gastronomie, beverage & wellness.",
    "problem.title": "Waarom de markt stokt",
    "problem.text": "70% van potentiële consumenten vermijden edibles vanwege de aardse, bittere smaak en typische geur. De markt groeit—de smaak remt.",
    "problem.stat": "70%",
    "problem.statText": "wijst edibles af door smaak/geur.",
    "solution.title": "De oplossing: NECTAR",
    "solution.text": "Onze eigen micro‑inkapseling bindt cannabinoïden op moleculair niveau. Resultaat: 100% effect, 0% nasmaak. Wateroplosbaar, geurloos, hittebestendig.",
    "solution.formats": "Formaten",
    "solution.format1": "<strong>Nano‑sticks</strong> – poeder voor nauwkeurige dosering",
    "solution.format2": "<strong>Micro‑droplets</strong> – vloeibaar voor dranken & sauzen",
    "benefits.title": "Voordelen voor Food & Beverage",
    "benefits.item1.title": "Infused Dining",
    "benefits.item1.text": "Het gerecht smaakt naar de chef, niet naar de plant.",
    "benefits.item2.title": "Premium‑positionering",
    "benefits.item2.text": "Past bij sterrenrestaurants, wellnessdrinks en lifestyle foods.",
    "benefits.item3.title": "Schaalbare technologie",
    "benefits.item3.text": "Niet alleen een product, maar een basis voor nieuwe categorieën.",
    "benefits.item4.title": "Nauwkeurige dosering",
    "benefits.item4.text": "Consistente werking voor professioneel gebruik.",
    "cultivation.eyebrow": "Cultivation Intelligence",
    "cultivation.title": "Premium teelt als ervaring",
    "cultivation.lead": "Precieze licht‑ en voedingssturing, AI‑optimalisatie en volledige kwaliteitsmetingen—voor ongeëvenaarde luxe‑kwaliteit.",
    "cultivation.cert1": "Voorbeeldcertificaat: GMP‑ready",
    "cultivation.cert2": "Voorbeeldcertificaat: ISO‑cleanroom",
    "cultivation.cert3": "Voorbeeldcertificaat: AI‑audit trail",
    "cultivation.tab1": "Kieming",
    "cultivation.tab2": "Vegetatief",
    "cultivation.tab3": "Bloei",
    "cultivation.tab4": "Cure",
    "cultivation.step1.title": "Kieming & start",
    "cultivation.step1.text": "Micro‑klimaat met 98% luchtvochtigheid, zachte spectra‑start en AI‑seed‑tracking voor maximale vitaliteit.",
    "cultivation.step2.title": "Vegetatieve groei",
    "cultivation.step2.text": "Dynamische LED‑matrix, precieze EC‑curves en AI‑feedback in realtime—groei zonder stress.",
    "cultivation.step3.title": "Bloei & potentie",
    "cultivation.step3.text": "Spectrale boost, precieze fotoperiode en AI‑optimalisatie voor consistente profielwaarden.",
    "cultivation.step4.title": "Cure & finish",
    "cultivation.step4.text": "Gecontroleerde rijping met AI‑gestuurde terpeenbalans en perfecte luchtvochtigheid.",
    "cultivation.metric.light": "Lichtprofiel",
    "cultivation.metric.nutrients": "Voedings‑flow",
    "cultivation.metric.maturity": "Rijpheid",
    "cultivation.metric.stability": "Stabiliteit",
    "cultivation.chart.title": "Luxe‑kwaliteit (voorbeeld)",
    "cultivation.chart.aroma": "Aroma",
    "cultivation.chart.purity": "Zuiverheid",
    "cultivation.chart.stability": "Stabiliteit",
    "cultivation.chart.terpenes": "Terpeenprofiel",
    "cultivation.gauge.label": "Luxe‑score",
    "cultivation.gauge.note": "Voorbeeldwaarde, helder gevisualiseerd.",
    "products.title": "Premium productlijn",
    "products.lead": "Gecureerde premium‑creaties voor signature menu’s, private dining en upscale events—allemaal met onzichtbare NECTAR‑infusie.",
    "products.filter.all": "Alle",
    "products.filter.drinks": "Dranken",
    "products.filter.food": "Eten",
    "products.filter.experience": "Experience",
    "products.cta": "Nu kopen",
    "products.shop": "Shop",
    "products.truffle.eyebrow": "Limited Infusion",
    "products.truffle.lead": "Exclusieve truffelcreatie met precieze dosering. Luxueus van smaak, neutraal in infusie.",
    "products.truffle.item1": "Premium truffelbasis",
    "products.truffle.item2": "Geurloos & fijn afgestemd",
    "products.truffle.item3": "Ideaal voor signature menu’s & events",
    "products.whitegold.eyebrow": "Chef Selection",
    "products.whitegold.lead": "Romige rijst, fijne umami‑tonen, volledig vrij van cannabisaroma.",
    "products.whitegold.item1": "Zachte werking, elegante textuur",
    "products.whitegold.item2": "Perfect als hoofdgerecht",
    "products.whitegold.item3": "Precies te doseren per portie",
    "products.velvet.eyebrow": "Beverage",
    "products.velvet.lead": "Elegante spritz‑editie voor wellnesslounges & premium bars.",
    "products.velvet.item1": "Kristalhelder & geurloos",
    "products.velvet.item2": "Stabiele infusie in dranken",
    "products.velvet.item3": "Signature garnish optioneel",
    "products.midnight.eyebrow": "Dessert",
    "products.midnight.lead": "Pure chocolade met subtiele infusie—zonder nasmaak.",
    "products.midnight.item1": "Temperatuurbestendig",
    "products.midnight.item2": "Precieze effectniveaus",
    "products.midnight.item3": "Ideaal voor tasting menu’s",
    "products.ghostdose.eyebrow": "Experience",
    "products.ghostdose.lead": "Precieze enkelvoudige dosis voor gecontroleerd effect—neutraal van smaak.",
    "products.ghostdose.item1": "Direct oplosbaar",
    "products.ghostdose.item2": "Discreet & geurloos",
    "products.ghostdose.item3": "Ideaal voor micro‑dosing",
    "products.microshot.eyebrow": "Experience",
    "products.microshot.lead": "Vloeibare enkelvoudige dosis voor voorspelbare ervaring—zonder cannabisaroma.",
    "products.microshot.item1": "Stabiele emulsie",
    "products.microshot.item2": "Precieze effectniveaus",
    "products.microshot.item3": "Voor lounge‑ en event‑settings",
    "pitch.title": "60‑seconden‑pitch",
    "pitch.hook.title": "Hook",
    "pitch.hook.text": "Wist je dat 70% van potentiële cannabisconsumenten edibles vermijden omdat ze de smaak en geur haten?",
    "pitch.problem.title": "Probleem",
    "pitch.problem.text": "Traditionele cannabis‑foods verstoren de culinaire ervaring—de nasmaak blijft uren.",
    "pitch.solution.title": "Oplossing",
    "pitch.solution.text": "NECTAR micro‑inkapselt cannabinoïden. 100% effect, 0% nasmaak. Wateroplosbaar, geurloos, hittebestendig.",
    "pitch.market.title": "Markt/voordeel",
    "pitch.market.text": "Technologie voor de volgende generatie food & beverage—van fine dining tot wellness‑soda.",
    "pitch.cta.title": "Call to Action",
    "pitch.cta.text": "Wij maken cannabis onzichtbaar zodat de beleving centraal staat. Zullen we volgende week de pilot bespreken?",
    "contact.title": "Klaar voor de pilotfase?",
    "contact.text": "Laten we de volgende generatie cannabis‑foodtech definiëren. Neem contact op voor pilots, samenwerking en opschaling.",
    "contact.name": "Naam",
    "contact.namePlaceholder": "Uw naam",
    "contact.email": "E‑mail",
    "contact.emailPlaceholder": "naam@voorbeeld.nl",
    "contact.message": "Bericht",
    "contact.messagePlaceholder": "Waar bent u in geïnteresseerd?",
    "contact.button": "Pilot aanvragen",
    "contact.send": "Bericht verzenden",
    "reviews.title": "Beoordelingen",
    "reviews.lead": "Fictieve stemmen ter illustratie van de premium‑ervaring.",
    "reviews.score": "Voorbeeldscore",
    "reviews.item1.text": "“Het gerecht blijft culinair puur—de werking is precies.”",
    "reviews.item1.meta": "Signature Dining · Voorbeeldreview",
    "reviews.item2.text": "“Eindelijk een infusie die onze drinkprofielen niet verandert.”",
    "reviews.item2.meta": "Wellness Lounge · Voorbeeldreview",
    "reviews.item3.text": "“Premium ervaring zonder nasmaak—precies wat ontbrak.”",
    "reviews.item3.meta": "Private Events · Voorbeeldreview",
    "reviews.item4.text": "“Constante dosering die in de keuken echt planbaar is.”",
    "reviews.item4.meta": "Chef Collaboration · Voorbeeldreview",
    "reviews.item5.text": "“Geurloze premium‑infusie—perfect voor onze signature drinks.”",
    "reviews.item5.meta": "Beverage Lab · Voorbeeldreview",
    "reviews.item6.text": "“Kwaliteit die voelt als een nieuwe standaard.”",
    "reviews.item6.meta": "FoodTech Partner · Voorbeeldreview",
    "footer.tagline": "FoodTech · Cannabis‑innovatie",
    "footer.imprint": "Colofon",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.terms": "Voorwaarden",
    "common.source": "Bron",
    "catalog.title": "Productcatalogus",
    "catalog.lead": "Kies een premium‑creatie en stuur uw aanvraag voor beschikbaarheid, prijzen en pilot‑contingenten.",
    "catalog.notice": "<strong>Let op:</strong> Bestellimiet per zending: maximaal 5 g. Levering per drone (pilot).",
    "catalog.cta": "Aanvraag sturen",
    "catalog.truffle": "Limited Infusion · Premium truffelbasis",
    "catalog.truffle.title": "Truffel Cannabis",
    "catalog.whitegold.title": "White‑Gold Risotto",
    "catalog.velvet.title": "Velvet Sparkling",
    "catalog.midnight.title": "Midnight Ganache",
    "catalog.ghostdose.title": "Ghost‑Dose Nano‑Stick",
    "catalog.microshot.title": "Micro‑Droplet Shot",
    "catalog.whitegold.pill": "White‑Gold",
    "catalog.velvet.pill": "Velvet",
    "catalog.midnight.pill": "Midnight",
    "catalog.ghostdose.pill": "Ghost‑Dose",
    "catalog.microshot.pill": "Micro‑Shot",
    "catalog.pill": "Premium",
    "catalog.whitegold": "Chef Selection · Fijne umami‑tonen",
    "catalog.velvet": "Beverage · Kristalhelder & geurloos",
    "catalog.midnight": "Dessert · Temperatuurbestendig",
    "catalog.ghostdose": "Experience · Precieze enkelvoudige dosis",
    "catalog.microshot": "Experience · Vloeibare enkelvoudige dosis",
    "legal.imprint.title": "Colofon",
    "legal.imprint.lead": "Gegevens conform de wettelijke vereisten.",
    "legal.privacy.title": "Privacy",
    "legal.privacy.lead": "Deze privacyverklaring informeert u over de verwerking van persoonsgegevens op deze website.",
    "legal.contact.title": "Contact",
    "legal.contact.lead": "Neem contact op voor pilotprojecten, samenwerking of persvragen.",
    "legal.terms.title": "Algemene voorwaarden",
    "legal.terms.lead": "Deze voorwaarden gelden voor aanvragen, offertes en pilotprojecten van NECTAR FoodTech B.V.",
    "legal.imprint.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Nederland",
    "legal.imprint.register": "Vertegenwoordigd door: [Naam]<br />Handelsregister: [Register, nummer]<br />Btw‑id: [Nummer]",
    "legal.imprint.contactLabel": "Contact:",
    "legal.contact.address": "<strong>NECTAR FoodTech B.V.</strong><br />De Wallen, Amsterdam<br />Nederland",
    "legal.contact.emailLabel": "E‑mail:",
    "legal.contact.phoneLabel": "Telefoon:",
    "legal.privacy.section1.title": "1. Verantwoordelijke",
    "legal.privacy.section1.address": "NECTAR FoodTech B.V.<br />De Wallen, Amsterdam, Nederland",
    "legal.privacy.section1.emailLabel": "E‑mail:",
    "legal.privacy.section2.title": "2. Algemene informatie",
    "legal.privacy.section2.text": "Wij verwerken persoonsgegevens uitsluitend voor zover dit noodzakelijk is voor het aanbieden van deze website, communicatie met u of het voldoen aan wettelijke verplichtingen.",
    "legal.privacy.section3.title": "3. Gegevensverwerking bij bezoek",
    "legal.privacy.section3.text": "Bij het bezoeken van de website verwerkt de webserver automatisch informatie (bijv. IP‑adres, datum/tijd, bezochte pagina’s, browsertype) in server‑logbestanden. Dit is voor technische levering, beveiliging en foutanalyse.",
    "legal.privacy.section4.title": "4. Contact opnemen",
    "legal.privacy.section4.text": "Als u ons per e‑mail of via het contactformulier benadert, verwerken wij uw gegevens om uw aanvraag te behandelen. Gegevens worden verwijderd zodra ze niet meer nodig zijn, tenzij wettelijke bewaarplichten gelden.",
    "legal.privacy.section5.title": "5. Cookies",
    "legal.privacy.section5.text": "Deze website gebruikt alleen technisch noodzakelijke cookies, indien deze door de gebruikte systemen worden geplaatst. Er vindt geen aanvullende cookie‑gebruik (bijv. tracking/marketing) plaats.",
    "legal.privacy.section6.title": "6. Rechtsgrondslagen",
    "legal.privacy.section6.text": "De verwerking is gebaseerd op art. 6 lid 1 onder f AVG (gerechtvaardigd belang bij veilige website‑voorziening) en art. 6 lid 1 onder b AVG (afhandeling van aanvragen).",
    "legal.privacy.section7.title": "7. Ontvangers",
    "legal.privacy.section7.text": "Uw gegevens worden alleen gedeeld met derden als dat nodig is voor het leveren van de website (bijv. hostingdienst) of als er een wettelijke verplichting bestaat.",
    "legal.privacy.section8.title": "8. Bewaartermijn",
    "legal.privacy.section8.text": "Server‑logbestanden worden regelmatig verwijderd. Contactgegevens worden verwijderd zodra het doel van de verwerking is vervallen, tenzij wettelijke bewaarplichten gelden.",
    "legal.privacy.section9.title": "9. Uw rechten",
    "legal.privacy.section9.text": "U heeft recht op inzage, correctie, verwijdering, beperking van verwerking, gegevensoverdraagbaarheid en bezwaar tegen verwerking. U heeft ook het recht een klacht in te dienen bij een toezichthouder.",
    "legal.privacy.section10.title": "10. Contact privacy",
    "legal.privacy.section10.text": "Voor privacyvragen kunt u contact opnemen via",
    "legal.terms.section1.title": "1. Toepassingsgebied",
    "legal.terms.section1.text": "Deze voorwaarden gelden voor alle zakelijke relaties met NECTAR FoodTech B.V. Afwijkende voorwaarden gelden alleen indien schriftelijk bevestigd.",
    "legal.terms.section2.title": "2. Diensten",
    "legal.terms.section2.text": "Wij bieden productinformatie, samples/pilot‑contingenten en technologie‑gerelateerde diensten voor food &amp; beverage.",
    "legal.terms.section3.title": "3. Prijzen &amp; betaling",
    "legal.terms.section3.text": "Prijzen volgen uit de betreffende offerte. Betaling geschiedt volgens overeengekomen betalingsvoorwaarden.",
    "legal.terms.section4.title": "4. Aansprakelijkheid",
    "legal.terms.section4.text": "De wettelijke aansprakelijkheidsregels zijn van toepassing. Aansprakelijkheid voor gederfde winst is uitgesloten voor zover wettelijk toegestaan.",
    "legal.terms.section5.title": "5. Slotbepalingen",
    "legal.terms.section5.text": "Op deze voorwaarden is Nederlands recht van toepassing. Voor zover toegestaan is de bevoegde rechter gevestigd in Amsterdam.",
    "cultivation.benchmark.eyebrow": "Benchmark & Bronnen",
    "cultivation.benchmark.title": "Gevalideerde teelt‑referenties",
    "cultivation.benchmark.lead": "Publieke datapunten uit de literatuur als referentie voor gecontroleerde teelt. Waarden zijn cultivar‑ en locatieafhankelijk.",
    "cultivation.benchmark.temp.title": "Temperatuur (dag)",
    "cultivation.benchmark.temp.note": "Aanbevolen dagbereik voor groei.",
    "cultivation.benchmark.humidity.title": "Luchtvochtigheid",
    "cultivation.benchmark.humidity.note": "Typisch optimaal bereik voor groei.",
    "cultivation.benchmark.light.title": "Lichtcyclus (vegetatief)",
    "cultivation.benchmark.light.note": "Langere fotoperiode bevordert vegetatieve groei.",
    "cultivation.benchmark.flower.title": "Bloei‑trigger",
    "cultivation.benchmark.flower.note": "Donkerfase induceert bloei bij fotoperiode‑rassen.",
    "cultivation.benchmark.ph.title": "Substraat‑pH",
    "cultivation.benchmark.ph.note": "Doelbereik voor nutriëntenbeschikbaarheid.",
    "cultivation.cea.title": "CEA‑stuurvariabelen (Controlled‑Environment Agriculture)",
    "cultivation.cea.item1": "Temperatuur (lucht, wortelzone)",
    "cultivation.cea.item2": "Relatieve luchtvochtigheid (RH)",
    "cultivation.cea.item3": "CO2‑gehalte",
    "cultivation.cea.item4": "Licht (intensiteit, spectrum, duur)",
    "cultivation.cea.item5": "Nutriëntenconcentratie en pH‑waarde",
    "cultivation.cea.item6": "Plantdichtheid & teeltduur",
    "cultivation.sources.title": "Bronnen"
  }
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.de;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dictionary[key]) {
      el.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      el.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
};

const initLanguage = () => {
  const saved = localStorage.getItem("nectar-lang");
  const browserLang = (navigator.language || "de").slice(0, 2).toLowerCase();
  const initial = ["de", "en", "nl"].includes(saved)
    ? saved
    : ["de", "en", "nl"].includes(browserLang)
      ? browserLang
      : "de";

  applyLanguage(initial);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("nectar-lang", lang);
      applyLanguage(lang);
    });
  });
};

initLanguage();

const processTabs = document.querySelectorAll(".process-tab");
const processPanels = document.querySelectorAll(".process-card");

const setProcessStep = (step) => {
  processPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === step);
  });
};

processTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    processTabs.forEach((btn) => {
      btn.classList.toggle("is-active", btn === tab);
      btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
    });
    setProcessStep(tab.dataset.step);
  });
});

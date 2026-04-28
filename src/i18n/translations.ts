export type Lang = "sk" | "en";

export const translations = {
  sk: {
    // ─── HEADER ───
    nav: {
      home: "Domov",
      solutions: "Riešenia",
      howItWorks: "Ako to funguje",
      forWhom: "Pre koho",
      hundredChanges: "100 zmien",
      blog: "Blog",
      faq: "FAQ",
      contact: "Kontakt",
    },
    header: {
      cta: "Dohodnúť AI audit",
    },

    // ─── HERO ───
    hero: {
      badge: "B2B PREDAJ · OUTSOURCING OBCHODU · AI",
      headline1: "Posúvame váš",
      headlineAccent: "B2B obchod",
      headline3: "vpred s AI",
      sub: "V ai.mercatores.sk sme profesionáli na B2B predaj a outsourcing obchodu. Kombinujeme dlhoročné obchodné skúsenosti s inováciami a umelou inteligenciou pre dosiahnutie maximálnych výsledkov.",
      cta: "DOHODNÚŤ KONZULTÁCIU",
      ctaSub: "B2B predaj · Outsourcing · AI implementácia · Výkon",
      pills: [
        { label: "OUTSOURCING OBCHODU", desc: "Prevzatie a riadenie obchodných procesov, aby ste sa sústredili na rast." },
        { label: "MERATEĽNÉ VÝSLEDKY", desc: "Transparentné KPIs, pipeline pod kontrolou a reálne obchodné čísla." },
        { label: "AI + SKÚSENOSTI", desc: "Dlhoročný B2B know-how posilnený AI pre maximálnu efektivitu." },
      ],
      videoBadge: "AI v akcii",
      videoCaption: "B2B predaj a outsourcing obchodu s AI",
    },

    // ─── PAIN POINTS ───
    pain: {
      eyebrow: "Diagnostika",
      title1: "Kde firmy",
      titleAccent: "strácajú výkon",
      sub: "Tri oblasti, kde bez systému a AI vzniká najväčší chaos a straty.",
      cards: [
        { title: "Obchod", items: ["Leady sa strácajú", "Follow-up je slabý", "Obchod nie je riadený systémovo", "Chýba prioritizácia a konzistencia"] },
        { title: "Marketing", items: ["Kampane neprinášajú obchodný efekt", "Slabá personalizácia", "Pomalá exekúcia", "Marketing nie je prepojený s predajom"] },
        { title: "Operatíva", items: ["Veľa ručnej práce", "Chaos medzi tímami", "Oneskorené reakcie", "Slabý reporting a workflow"] },
      ],
    },

    // ─── SOLUTIONS ───
    solutions: {
      eyebrow: "Systém",
      title1: "Čo robí",
      sub: "Štyri piliere, ktoré menia firmu na riadený výkonný systém — nie izolované nástroje, ale jeden prepojený model.",
      pillars: [
        {
          title: "AI pre obchod",
          desc: "Zrýchľujeme reakcie na dopyty, zlepšujeme kvalifikáciu príležitostí a nastavujeme konzistentný obchodný proces.",
          cases: ["AI kvalifikácia leadov", "Automatizovaný follow-up", "Spracovanie inbound dopytov", "Prioritizácia príležitostí", "CRM workflow a pipeline logika", "Konzistentnejší obchodný proces"],
        },
        {
          title: "AI pre marketing",
          desc: "Prepájame marketing s reálnym obchodným výkonom cez personalizáciu, automatizáciu a lepšiu prácu s leadmi.",
          cases: ["AI personalizovaná komunikácia", "Tvorba a adaptácia obsahu", "Lead nurturing", "Automatizácia kampaní", "Segmentácia podľa správania", "Prepojenie marketingu s obchodom"],
        },
        {
          title: "AI pre operatívu",
          desc: "Znižujeme množstvo ručných krokov, skracujeme reakčné časy a prinášame poriadok do interných procesov.",
          cases: ["Automatizácia interných workflow", "Znižovanie ručnej administratívy", "Schvaľovacie procesy", "Reporting a dashboardy", "Koordinácia tímov", "Lepšie procesné riadenie"],
        },
        {
          title: "Implementácia a správa",
          desc: "Nestačí riešenie navrhnúť. Musí sa zaviesť, napojiť, odriadiť a priebežne optimalizovať.",
          cases: ["Audit AI príležitostí", "Návrh architektúry riešenia", "Integrácie a prepojenie systémov", "Onboarding tímu", "Správa a dohľad nad riešením", "Pravidelná optimalizácia výkonu"],
        },
      ],
      closing: "„Nejde o izolované nástroje. Ide o jeden riadený systém, ktorý prepája výkon firmy naprieč oddeleniami.\"",
    },

    // ─── TECH FOUNDATION ───
    tech: {
      badge: "Technologický základ",
      title1: "Technologický základ,",
      titleAccent: "na ktorom staviame",
      intro: "AI transformácia firmy nestojí na jednom nástroji. Stojí na správne navrhnutej kombinácii platforiem, workflow a riadiacej logiky.",
      platforms: [
        { name: "Go High Level", description: "Využívame ho tam, kde firma potrebuje prepojiť lead management, CRM, kampane, komunikáciu, formuláre, funnel logiku a automatizované follow-upy do jedného riadeného prostredia." },
        { name: "OpenClaw", description: "Využívame ho tam, kde je cieľom vyššia miera autonómie, práca s AI agentmi, špecializované workflow a flexibilnejšie nasadenie inteligentných procesov nad konkrétnym firemným použitím." },
      ],
      howTitle: "Ako s tým pracujeme",
      howDesc: "Nepredávame nástroje ako samostatné produkty. Navrhujeme, kde dávajú zmysel, prepájame ich s procesmi firmy a spravujeme ich tak, aby prinášali reálny výkon.",
      closing: "Nástroje samy osebe firmu nezmenia. Rozhoduje to, ako sú zapojené do reálneho fungovania firmy.",
    },

    // ─── WHY FAIL ───
    whyFail: {
      eyebrow: "Realita trhu",
      title1: "Väčšina AI projektov nezlyhá na technológii.",
      titleAccent: "Zlyhá na tom, že sa nikdy nestane súčasťou fungovania firmy.",
      sub: "Firmy dnes často nekupujú zlé nástroje. Zlyhávajú na tom, že ich nevedia premeniť na proces, ownership a dlhodobo riadený výkon.",
      commonState: "Bežný stav",
      ourWay: "Riadená AI transformácia",
      fails: ["Firma kúpi nástroje bez jasného cieľa", "AI sa nenasadí do reálnych procesov", "Chýba interný ownership", "Systémy zostanú odpojené", "Tím nevie, čo má s riešením robiť", "Po spustení sa tomu nikto nevenuje", "Výsledkom je ďalší chaos namiesto výkonu"],
      ourWayItems: ["Začíname auditom a diagnostikou", "Navrhujeme architektúru, nie len tool stack", "AI prepájame s obchodom, marketingom a operatívou", "Riešenie implementujeme do reality firmy", "Nastavujeme ownership a logiku používania", "Riešenie spravujeme a optimalizujeme", "Cieľom je funkčný systém, nie len technológia"],
      closing1: "„My nedodávame AI ako efekt.",
      closingAccent: "Dodávame ju ako riadený systém pre výkon firmy.\"",
    },

    // ─── HOW IT WORKS ───
    how: {
      eyebrow: "Proces",
      title1: "Od auditu po",
      titleAccent: "riadený výkon",
      sub: "Päť krokov transformácie. Žiadne experimenty. Riadený systém.",
      steps: [
        { title: "Audit a diagnostika", desc: "Zistíme, kde vo firme vznikajú straty, úzke miesta a nevyužité príležitosti pre AI." },
        { title: "Návrh transformačnej architektúry", desc: "Navrhneme, kde má AI reálne pomôcť, ako sa napojí na procesy a aké workflow bude riadiť." },
        { title: "Implementácia a integrácie", desc: "Nasadíme riešenia do obchodu, marketingu a operatívy a prepojíme ich s existujúcimi nástrojmi." },
        { title: "Spustenie a prepojenie s tímom", desc: "Zapojíme ľudí, procesy a systém do jedného funkčného modelu." },
        { title: "Správa a optimalizácia", desc: "Priebežne sledujeme výkon, upravujeme logiku a optimalizujeme dopad." },
      ],
      closing1: "„AI transformácia zlyháva vtedy, keď sa berie ako jednorazový projekt.",
      closingAccent: "Funguje vtedy, keď sa riadi ako systém.\"",
    },

    // ─── FOR WHOM ───
    forWhom: {
      eyebrow: "Segmenty",
      title1: "Pre firmy, ktoré chcú",
      titleAccent: "rásť bez ďalšieho chaosu",
      sub: "Kde ai.mercatores.sk dáva najväčší zmysel — a pre koho naopak nie.",
      segments: [
        { title: "B2B firmy", desc: "Potrebujú rýchlejší a konzistentnejší obchod, lepšiu koordináciu marketingu a predaja.", points: ["Práca s leadmi a pipeline", "Automatizácia follow-upu", "Prepojenie obchodu s marketingom"] },
        { title: "Služby", desc: "Veľa komunikácie, opakované procesy a potreba rýchlych reakcií na dopyty.", points: ["Poriadok v klientskom toku", "Rýchlejšie reakcie na dopyty", "Menej ručnej administratívy"] },
        { title: "Retail a prevádzky", desc: "Potreba zrýchliť procesy, znížiť operatívny chaos a lepšie prepájať komunikáciu.", points: ["Lepší reporting a prehľad", "Zrýchlenie procesov", "Prepojenie dopytu a dodania"] },
        { title: "Zdravotníctvo", desc: "Vysoká organizačná presnosť, množstvo opakovaných procesov a koordinácie.", points: ["Efektívna komunikácia", "Automatizácia repetitívnych úloh", "Koordinácia tímov a procesov"] },
        { title: "Firmy v raste", desc: "Rastúci objem leadov a úloh, kde chaos rastie rýchlejšie než výkon.", points: ["Systém namiesto improvizácie", "Škálovanie bez rastu nákladov", "Procesná stabilita v raste"] },
      ],
      midQuote: "„Najväčší zmysel to dáva firmám, ktoré už cítia, že ďalší rast bez systému len znásobí chaos.\"",
      notForTitle: "Pre koho to nie je",
      notFor: ["Firmy, ktoré chcú len lacný AI experiment bez zodpovednosti", "Firmy, ktoré nechcú meniť procesy", "Firmy, ktoré hľadajú len pekný dashboard bez reálneho dopadu", "Firmy, ktoré nechcú interný ownership nad riešením", "Firmy, ktoré chcú len tool, nie systém", "Firmy, ktoré nechcú nič implementovať do reality"],
      notForClosing: "„Ak firma nechce meniť fungovanie, AI jej nepomôže. Len pridá ďalšiu vrstvu chaosu.\"",
    },

    // ─── IMPACT ───
    impact: {
      eyebrow: "Výsledky",
      title1: "Výsledkom nie je viac AI.",
      titleAccent: "Výsledkom je výkonnejšia firma.",
      sub: "Dopad nie je mágia technológie. Je to výsledok lepšie navrhnutého a riadeného systému.",
      items: [
        { title: "Viac kvalifikovaných príležitostí", desc: "AI identifikuje a prioritizuje najrelevantnejšie leady, takže obchod pracuje s tým, čo má reálny potenciál." },
        { title: "Rýchlejšia reakcia na dopyty", desc: "Automatizované spracovanie a smerovanie dopytov skracuje reakčný čas z hodín na minúty." },
        { title: "Menej ručnej operatívy", desc: "Automatizácia repetitívnych úloh uvoľňuje kapacitu tímu na prácu s vyššou hodnotou." },
        { title: "Vyššia konzistencia komunikácie", desc: "Jednotný systém zabezpečuje, že každý zákazník dostáva rovnako kvalitnú odpoveď a follow-up." },
        { title: "Lepší reporting a rozhodovanie", desc: "Prepojené dáta z obchodu, marketingu a operatívy dávajú manažmentu reálny obraz o výkone." },
        { title: "Efektívnejšie využitie tímu", desc: "Menej manuálnych krokov, jasnejšie workflow a lepšia koordinácia medzi oddeleniami." },
        { title: "Menej chaosu medzi oddeleniami", desc: "Obchod, marketing a operatíva fungujú v jednom systéme namiesto izolovaných nástrojov." },
        { title: "Škálovanie bez rastu komplikácií", desc: "Riadený AI systém umožňuje rásť bez toho, aby sa každý nový klient alebo projekt stal zdrojom chaosu." },
      ],
      closing: "„Keď je AI správne navrhnutá a riadená, nevytvára ďalší nástroj. Odstraňuje zbytočné trenie vo firme.\"",
    },

    // ─── PHILOSOPHY ───
    philosophy: {
      eyebrow: "Filozofia",
      title1: "ai.mercatores.sk premieňa AI na",
      titleAccent: "reálny firemný výkon",
      thoughts: [
        "Obchodné výsledky nie sú náhoda, ale architektúra.",
        "AI má byť súčasťou výkonného systému firmy.",
        "Väčšina firiem nepotrebuje viac nástrojov, ale menej chaosu.",
        "Spájame stratégiu, implementáciu a správu do jedného modelu.",
      ],
    },

    // ─── HUNDRED CHANGES ───
    hundred: {
      badge: "AI Transformation Map",
      title1: "nevyhnutných zmien,",
      titleAccent: "ktoré menia fungovanie firiem",
      sub: "Svet sa nemení pomaly. Mení sa naraz. AI agenti prestávajú byť doplnkom a stávajú sa novou vrstvou riadenia, predaja, marketingu a operatívy.",
      blocks: [
        { title: "Agenti prichádzajú", desc: "Chatboty boli len začiatok. AI agenti majú pamäť, zručnosti a schopnosť konať samostatne — a menia pravidlá hry.", points: ["Chatboty nestačia — agenti majú pamäť, zručnosti a samostatnosť", "Špecializovaní agenti budú v každom odbore firmy", "Agenti budú spúšťať ďalších agentov na konkrétne úlohy", "Firmy sa rozdelia na tie, ktoré agentov riadia, a tie, ktoré zaostanú"] },
        { title: "Marketing sa mení natrvalo", desc: "AI marketér tvorí, testuje a optimalizuje nepretržite. Kto nemá stratégiu, prehrá aj s najlepším nástrojom.", points: ["AI tvorí, testuje a optimalizuje obsah nepretržite", "Personalizácia sa stane štandardom, nie výhodou", "Priemerný AI obsah prehrá — rozhodne kvalita vstupov a know-how", "Agentúry bez stratégie stratia význam"] },
        { title: "Predaj už nebude ako doteraz", desc: "Follow-up bude automatický a personalizovaný. Obchodný proces sa zrýchli z týždňov na dni.", points: ["Follow-up bude automatický, personalizovaný a konzistentný", "Masové oslovovanie bude slabnúť — rozhodovať bude relevancia", "AI obchodník bude kvalifikovať, prioritizovať a pripravovať ponuky", "Obchodný proces sa zrýchli z týždňov na dni"] },
        { title: "Prevádzka a technológie", desc: "Rutinná operatíva sa automatizuje. Firemné postupy prestanú byť dokumenty — stanú sa vykonávanou logikou.", points: ["Rutinná operatíva sa bude automatizovať", "Reporting, fakturácia, upomienky a podpora budú bežať priebežne", "Firemné postupy prestanú byť dokumenty — stanú sa vykonávanou logikou", "Vzniknú firmy fungujúce takmer bez denného zásahu človeka"] },
        { title: "Operačný systém firmy", desc: "Firmy prestanú skladať 15 nástrojov. Všetko sa prepojí cez jednu platformu s agentmi, dátami a logikou.", points: ["Firmy prestanú skladať 15 nástrojov dohromady", "Všetko sa bude prepájať cez jednu platformu", "Agenti budú potrebovať spoločnú pamäť, dáta a oprávnenia", "Marketing, predaj a operatíva sa budú riadiť z jedného miesta"] },
        { title: "Firma budúcnosti", desc: "Menší tím, násobne vyšší výkon. Ľudia sa presunú od rutiny ku stratégii a rozhodovaniu.", points: ["Menší tím môže dosahovať násobne vyšší výkon", "Ľudia sa presunú od rutiny ku stratégii, vzťahom a rozhodovaniu", "Najväčšou výhodou bude rýchlosť nasadenia", "AI umožní škálovať bez lineárneho rastu chaosu a nákladov"] },
        { title: "Svet sa mení", desc: "Nové očakávania zákazníkov, nové typy služieb, nová hodnota ľudskej práce. Čakanie nie je stratégia.", points: ["Vzniknú nové očakávania zákazníkov aj nové typy služieb", "Ľudsky vytvorené výstupy budú mať prémiovú hodnotu", "AI zmení nielen firmy, ale aj zdravotníctvo, služby a každodenný život", "Čakanie nie je stratégia"] },
      ],
      quote1: "Otázka už nie je, či AI zmení vašu firmu.",
      quoteAccent: "Otázka je, či ju začnete riadiť skôr, než vás začne meniť trh.",
      ctaTitle: "Zistite, ktoré zmeny sú pre vašu firmu najkritickejšie",
      ctaDesc: "Pozrieme sa na váš obchod, marketing a operatívu a navrhneme, kde má AI najväčší reálny dopad.",
      ctaBtn: "Dohodnúť AI audit",
    },

    // ─── FAQ ───
    faq: {
      eyebrow: "FAQ",
      title1: "Časté",
      titleAccent: "otázky",
      sub: "Odpovede na to, čo nás klienti pýtajú najčastejšie pred spoluprácou.",
      transition: "Ak máte otázky špecifické pre vašu firmu, najrýchlejšie ich zodpovie úvodný AI audit.",
      items: [
        { q: "Pre aké firmy je riešenie vhodné?", a: "Pre malé a stredné firmy, ktoré chcú systémovo riadiť obchod, marketing a operatívu. Najčastejšie pracujeme s B2B firmami, službami, retailom, zdravotníctvom a firmami v raste — od 10 do 500 ľudí." },
        { q: "Musíme mať už pripravené vlastné systémy?", a: "Nie. Dokážeme pracovať s existujúcimi nástrojmi aj navrhnúť riešenie od nuly. V rámci auditu zmapujeme váš aktuálny stav a navrhneme, čo ponechať, čo doplniť a čo prepojiť." },
        { q: "Viete sa napojiť na CRM, marketingové a interné nástroje?", a: "Áno. Integrujeme sa s bežnými CRM, e-mailovými, marketingovými a prevádzkovými nástrojmi. Konkrétne integrácie riešime v rámci návrhu architektúry — vždy podľa reality vašej firmy." },
        { q: "Koľko zvyčajne trvá prvé nasadenie?", a: "Závisí od rozsahu. Prvé výsledky vidíte typicky v priebehu týždňov. Kompletná transformácia prebieha postupne, v riadených fázach — nie ako jednorazový veľký projekt." },
        { q: "Robíte aj správu po spustení?", a: "Áno, a považujeme to za kľúčovú časť. AI riešenie bez priebežnej správy a optimalizácie stráca efekt. Nepustíme riešenie do sveta a neodídeme." },
        { q: "Je riešenie vhodné aj pre menší tím?", a: "Áno. AI a automatizácia sú pre menšie tímy mimoriadne efektívne — dokážu nahradiť manuálnu prácu a zvýšiť výkon bez nutnosti rozširovať tím." },
        { q: "Čo ak ešte nevieme, kde začať?", a: "Presne na to slúži náš AI audit. Pozrieme sa na vaše procesy v obchode, marketingu a operatíve a navrhneme konkrétne miesta, kde AI prinesie najvyšší efekt." },
        { q: "Viete riešiť obchod, marketing aj operatívu naraz?", a: "Áno, a presne v tom je naša pridaná hodnota. Nepracujeme v izolovaných silách — prepájame všetky tri oblasti do jedného riadeného systému." },
        { q: "Čo ak už máme časť nástrojov zavedenú?", a: "Budeme na nich stavať. Nenahrádzame funkčné veci — doplníme chýbajúce časti, prepojíme ich a zaradíme do uceleného systému." },
        { q: "Čo je prvý krok spolupráce?", a: "Vyplníte krátky formulár alebo nám napíšete. Dohodneme si úvodnú konzultáciu, kde prejdeme diagnostikou vašich procesov a navrhneme ďalší postup." },
      ],
    },

    // ─── CTA SECTION ───
    cta: {
      eyebrow: "Kontakt",
      title1: "Zistite, kde vám AI prinesie",
      titleAccent: "najväčší reálny dopad",
      sub: "Pozrieme sa na vaše obchodné, marketingové a prevádzkové procesy a navrhneme konkrétne miesta, kde AI a automatizácia prinesú najvyšší efekt.",
      form: {
        name: "Meno",
        namePh: "Vaše meno",
        company: "Firma",
        companyPh: "Názov firmy",
        email: "E-mail",
        emailPh: "email@firma.sk",
        phone: "Telefón",
        phonePh: "+421 ...",
        message: "Stručný opis situácie",
        messagePh: "Popíšte vašu situáciu, výzvy alebo čo riešite...",
        submit: "Chcem AI audit",
        note: "Prvý krok nie je nákup nástroja. Prvý krok je pochopiť, kde má AI vo vašej firme najväčší efekt.",
      },
      side: {
        overview: "AI Audit Overview",
        sales: "Obchod",
        marketing: "Marketing",
        ops: "Operatíva",
        processTitle: "Postup",
        processSteps: ["Diagnostika procesov", "Návrh architektúry", "Implementácia", "Správa a optimalizácia"],
        contactTitle: "Kontakt",
      },
    },

    // ─── FOOTER ───
    footer: {
      tagline: "AI transformačná platforma pre firmy, ktoré chcú riadený výkon namiesto chaosu.",
      navTitle: "Navigácia",
      contactTitle: "Kontakt",
      cta: "Dohodnúť konzultáciu",
      rights: "Všetky práva vyhradené.",
      privacy: "Ochrana súkromia",
      terms: "Podmienky",
    },

    // ─── BLOG ───
    blog: {
      back: "Späť na domovskú stránku",
      pageBadge: "Blog & Resources",
      title: "Užitočné články a zdroje",
      sub: "Praktické know-how pre B2B firmy, ktoré chcú rásť pomocou AI a moderného obchodu.",
      readMore: "Čítať viac",
      readMoreAria: "Čítať viac:",
      relatedBadge: "Súvisiace témy",
      relatedTitle: "Preskúmajte podľa oblasti",
      relatedSub: "Tematické klastre, ktoré spájajú články do logických celkov — vyberte si oblasť, ktorá vás zaujíma najviac.",
      readLatest: "Čítať najnovší",
      articleOne: "článok",
      articleFew: "články",
      articleMany: "článkov",
      docTitle: "Blog & Resources | ai.mercatores.sk",
      docDesc: "Praktické články o B2B predaji, AI v obchode, sales outsourcingu a automatizácii pre slovenské firmy.",
      topics: {
        ai: { name: "AI v obchode", description: "Praktické nasadenie AI v B2B predaji a kvalifikácii leadov." },
        outsourcing: { name: "Sales outsourcing", description: "Kedy externý obchodný tím dáva zmysel a kedy nie." },
        automation: { name: "Automatizácia", description: "CRM, kampane a procesy bez manuálnej rutiny." },
        gastro: { name: "Gastro & HoReCa", description: "AI riešenia pre reštaurácie, hotely a prevádzky." },
        cases: { name: "Prípadové štúdie", description: "Reálne implementácie s merateľnými výsledkami." },
        data: { name: "Dáta & analytika", description: "Open-source dáta a analytika pre rast obchodu." },
      },
      articles: [
        { title: "Ako sme implementovali AI do obchodného procesu Magnaseal — prípadová štúdia", description: "Špecializovaný B2B produkt, fragmentovaný trh a takmer nulová znalosť na Slovensku. Ako sme pomocou AI postavili obchodný proces pre distribútora magnetických záplat Magnaseal." },
        { title: "Na slovenský gastro trh vstupuje nový hráč: AI riadená prevádzka namiesto ďalšieho POS systému", description: "Slovenský gastro trh pozná desiatky POS systémov a QR menu nástrojov. AI riadená prevádzka prináša namiesto ďalšieho zoznamu funkcií skutočnú zmenu v každodennom chode reštaurácie." },
        { title: "AI v gastro prevádzke: ako reštaurácie a hotely zvyšujú výkon bez ďalšieho personálu", description: "Úzke marže, fluktuácia personálu a výkyvy návštevnosti. AI prináša iný prístup než ďalšieho zamestnanca — automatizáciu opakovaných úloh a lepšie rozhodovanie v reálnom čase." },
        { title: "Go High Level: ako automatizovať B2B obchod a marketing na Slovensku", description: "Väčšina B2B firiem používa 5–8 nástrojov, ktoré spolu nekomunikujú. Ako Go High Level zjednocuje CRM, emaily, landing pages a automatizácie do jednej platformy." },
        { title: "AI v B2B obchode: ako transformovať predaj pomocou umelej inteligencie", description: "AI v obchode nie je budúcnosť, ale prítomnosť. Firmy ktoré AI nasadili včas, majú dnes merateľnú výhodu. Praktický pohľad na to, kde AI v B2B predaji reálne funguje." },
        { title: "Čo je sales outsourcing a kedy sa oplatí?", description: "Hľadáte obchodníka mesiace bez výsledku? Alebo máte obchodníka s podpriemernými výsledkami? Kedy je sales outsourcing riešenie a kedy nie — porovnanie nákladov a rizík." },
        { title: "Inovatívne využitie open-source dát v predaji a marketingu", description: "Dáta sú hnacou silou B2B stratégií, ale bez pochopenia výhod ich integrácie ich hodnota uniká. Úvod do toho, ako open-source dáta optimalizujú predaj a marketing." },
        { title: "Go High Level: automatizácia obchodu na Slovensku", description: "All-in-one platforma pre CRM, email marketing, AI agenta a automatizácie. Kedy sa oplatí pre B2B firmy a aké sú alternatívy na slovenskom trhu." },
      ],
    },
  },

  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      howItWorks: "How it works",
      forWhom: "Who it's for",
      hundredChanges: "100 Changes",
      blog: "Blog",
      faq: "FAQ",
      contact: "Contact",
    },
    header: {
      cta: "Book AI audit",
    },

    hero: {
      badge: "B2B SALES · SALES OUTSOURCING · AI",
      headline1: "We move your",
      headlineAccent: "B2B sales",
      headline3: "forward with AI",
      sub: "At ai.mercatores.sk we are professionals in B2B sales and sales outsourcing. We combine years of commercial experience with innovation and artificial intelligence to deliver maximum results.",
      cta: "BOOK A CONSULTATION",
      ctaSub: "B2B sales · Outsourcing · AI implementation · Performance",
      pills: [
        { label: "SALES OUTSOURCING", desc: "We take over and run your sales processes so you can focus on growth." },
        { label: "MEASURABLE RESULTS", desc: "Transparent KPIs, pipeline under control and real commercial numbers." },
        { label: "AI + EXPERIENCE", desc: "Years of B2B know-how amplified by AI for maximum efficiency." },
      ],
      videoBadge: "AI in action",
      videoCaption: "B2B sales and sales outsourcing with AI",
    },

    pain: {
      eyebrow: "Diagnostics",
      title1: "Where companies",
      titleAccent: "lose performance",
      sub: "Three areas where, without a system and AI, the biggest chaos and losses arise.",
      cards: [
        { title: "Sales", items: ["Leads get lost", "Follow-up is weak", "Sales is not run systematically", "No prioritization or consistency"] },
        { title: "Marketing", items: ["Campaigns don't drive commercial impact", "Weak personalization", "Slow execution", "Marketing is not connected to sales"] },
        { title: "Operations", items: ["A lot of manual work", "Chaos between teams", "Delayed reactions", "Weak reporting and workflow"] },
      ],
    },

    solutions: {
      eyebrow: "System",
      title1: "What",
      sub: "Four pillars that turn a company into a managed performance system — not isolated tools, but one connected model.",
      pillars: [
        {
          title: "AI for sales",
          desc: "We speed up responses to inquiries, improve opportunity qualification and set up a consistent sales process.",
          cases: ["AI lead qualification", "Automated follow-up", "Inbound inquiry handling", "Opportunity prioritization", "CRM workflow & pipeline logic", "More consistent sales process"],
        },
        {
          title: "AI for marketing",
          desc: "We connect marketing with real commercial performance through personalization, automation and better lead handling.",
          cases: ["AI personalized communication", "Content creation & adaptation", "Lead nurturing", "Campaign automation", "Behavior-based segmentation", "Marketing-sales alignment"],
        },
        {
          title: "AI for operations",
          desc: "We reduce manual steps, shorten reaction times and bring order to internal processes.",
          cases: ["Internal workflow automation", "Reducing manual admin", "Approval processes", "Reporting & dashboards", "Team coordination", "Better process management"],
        },
        {
          title: "Implementation & management",
          desc: "Designing the solution isn't enough. It must be deployed, integrated, run and continuously optimized.",
          cases: ["AI opportunity audit", "Solution architecture design", "Integrations & system connectivity", "Team onboarding", "Solution management & oversight", "Regular performance optimization"],
        },
      ],
      closing: "“It's not about isolated tools. It's about one managed system that connects company performance across departments.”",
    },

    tech: {
      badge: "Technology foundation",
      title1: "The technology foundation",
      titleAccent: "we build on",
      intro: "AI transformation doesn't rest on a single tool. It rests on the right combination of platforms, workflows and operating logic.",
      platforms: [
        { name: "Go High Level", description: "We use it where a company needs to connect lead management, CRM, campaigns, communication, forms, funnel logic and automated follow-ups into one managed environment." },
        { name: "OpenClaw", description: "We use it where the goal is greater autonomy, working with AI agents, specialized workflows and more flexible deployment of intelligent processes for specific business use." },
      ],
      howTitle: "How we work with them",
      howDesc: "We don't sell tools as standalone products. We design where they make sense, connect them with the company's processes and manage them so they deliver real performance.",
      closing: "Tools alone won't change a company. What matters is how they are wired into how the company actually operates.",
    },

    whyFail: {
      eyebrow: "Market reality",
      title1: "Most AI projects don't fail on technology.",
      titleAccent: "They fail because they never become part of how the company actually runs.",
      sub: "Today, companies often don't buy bad tools. They fail because they can't turn them into process, ownership and long-term managed performance.",
      commonState: "Common state",
      ourWay: "Managed AI transformation",
      fails: ["The company buys tools without a clear goal", "AI is never deployed into real processes", "Internal ownership is missing", "Systems remain disconnected", "The team doesn't know what to do with the solution", "After launch, no one looks after it", "The result is more chaos instead of performance"],
      ourWayItems: ["We start with audit and diagnostics", "We design architecture, not just a tool stack", "We connect AI with sales, marketing and operations", "We implement the solution into the company's reality", "We set up ownership and usage logic", "We manage and optimize the solution", "The goal is a working system, not just technology"],
      closing1: "“We don't deliver AI as an effect.",
      closingAccent: "We deliver it as a managed system for company performance.”",
    },

    how: {
      eyebrow: "Process",
      title1: "From audit to",
      titleAccent: "managed performance",
      sub: "Five transformation steps. No experiments. A managed system.",
      steps: [
        { title: "Audit & diagnostics", desc: "We find where the company loses value, the bottlenecks and untapped opportunities for AI." },
        { title: "Transformation architecture design", desc: "We design where AI will really help, how it connects to processes and which workflows it will run." },
        { title: "Implementation & integrations", desc: "We deploy solutions into sales, marketing and operations and connect them with existing tools." },
        { title: "Launch & team alignment", desc: "We bring people, processes and the system into one functioning model." },
        { title: "Management & optimization", desc: "We continuously monitor performance, adjust logic and optimize impact." },
      ],
      closing1: "“AI transformation fails when treated as a one-off project.",
      closingAccent: "It works when run as a system.”",
    },

    forWhom: {
      eyebrow: "Segments",
      title1: "For companies that want to",
      titleAccent: "grow without more chaos",
      sub: "Where ai.mercatores.sk makes the most sense — and for whom it doesn't.",
      segments: [
        { title: "B2B companies", desc: "They need faster, more consistent sales and better coordination of marketing and sales.", points: ["Lead and pipeline work", "Follow-up automation", "Sales–marketing alignment"] },
        { title: "Services", desc: "Lots of communication, repetitive processes and the need for fast reactions to inquiries.", points: ["Order in client flow", "Faster reactions to inquiries", "Less manual admin"] },
        { title: "Retail & operations", desc: "Need to speed up processes, reduce operational chaos and better connect communication.", points: ["Better reporting & overview", "Process acceleration", "Demand–delivery alignment"] },
        { title: "Healthcare", desc: "High organizational precision, lots of repetitive processes and coordination.", points: ["Effective communication", "Automation of repetitive tasks", "Team & process coordination"] },
        { title: "Growing companies", desc: "Growing volume of leads and tasks where chaos grows faster than performance.", points: ["System instead of improvisation", "Scaling without cost growth", "Process stability in growth"] },
      ],
      midQuote: "“It makes the most sense for companies that already feel further growth without a system will only multiply the chaos.”",
      notForTitle: "Who it's not for",
      notFor: ["Companies that want a cheap AI experiment without responsibility", "Companies that don't want to change their processes", "Companies looking just for a nice dashboard with no real impact", "Companies that don't want internal ownership of the solution", "Companies that want a tool, not a system", "Companies that don't want to implement anything into reality"],
      notForClosing: "“If a company doesn't want to change how it operates, AI won't help. It will just add another layer of chaos.”",
    },

    impact: {
      eyebrow: "Results",
      title1: "The result is not more AI.",
      titleAccent: "The result is a higher-performing company.",
      sub: "Impact is not technology magic. It's the result of a better designed and managed system.",
      items: [
        { title: "More qualified opportunities", desc: "AI identifies and prioritizes the most relevant leads, so sales works on what really has potential." },
        { title: "Faster reactions to inquiries", desc: "Automated processing and routing of inquiries cuts reaction time from hours to minutes." },
        { title: "Less manual operations", desc: "Automation of repetitive tasks frees the team's capacity for higher-value work." },
        { title: "Higher communication consistency", desc: "A unified system ensures every customer gets an equally good answer and follow-up." },
        { title: "Better reporting & decisions", desc: "Connected data from sales, marketing and operations gives management a real view of performance." },
        { title: "More effective use of the team", desc: "Fewer manual steps, clearer workflows and better coordination across departments." },
        { title: "Less chaos between departments", desc: "Sales, marketing and operations run in one system instead of isolated tools." },
        { title: "Scaling without growing complications", desc: "A managed AI system enables growth without every new client or project becoming a source of chaos." },
      ],
      closing: "“When AI is designed and managed correctly, it doesn't add another tool. It removes unnecessary friction inside the company.”",
    },

    philosophy: {
      eyebrow: "Philosophy",
      title1: "ai.mercatores.sk turns AI into",
      titleAccent: "real company performance",
      thoughts: [
        "Commercial results are not luck — they are architecture.",
        "AI should be part of the company's performance system.",
        "Most companies don't need more tools, they need less chaos.",
        "We combine strategy, implementation and management into one model.",
      ],
    },

    hundred: {
      badge: "AI Transformation Map",
      title1: "inevitable changes",
      titleAccent: "reshaping how companies operate",
      sub: "The world doesn't change slowly. It changes all at once. AI agents are no longer an add-on — they're becoming a new layer of management, sales, marketing and operations.",
      blocks: [
        { title: "Agents are coming", desc: "Chatbots were just the beginning. AI agents have memory, skills and the ability to act independently — and they change the rules of the game.", points: ["Chatbots aren't enough — agents have memory, skills and autonomy", "Specialized agents will sit in every business area", "Agents will spawn other agents for specific tasks", "Companies will split into those that manage agents and those that fall behind"] },
        { title: "Marketing changes for good", desc: "An AI marketer creates, tests and optimizes continuously. Without strategy, you lose even with the best tool.", points: ["AI creates, tests and optimizes content continuously", "Personalization becomes a standard, not an advantage", "Average AI content loses — input quality and know-how decide", "Agencies without strategy lose relevance"] },
        { title: "Sales will never be the same", desc: "Follow-up will be automatic and personalized. The sales cycle compresses from weeks to days.", points: ["Follow-up will be automatic, personalized and consistent", "Mass outreach will fade — relevance will decide", "An AI sales rep will qualify, prioritize and prepare offers", "The sales process will accelerate from weeks to days"] },
        { title: "Operations & technology", desc: "Routine operations get automated. Company procedures stop being documents — they become executable logic.", points: ["Routine operations will be automated", "Reporting, invoicing, reminders and support will run continuously", "Procedures stop being documents — they become executable logic", "New companies will run almost without daily human intervention"] },
        { title: "The company operating system", desc: "Companies stop stitching 15 tools together. Everything connects through one platform with agents, data and logic.", points: ["Companies will stop stitching 15 tools together", "Everything will connect through one platform", "Agents will need shared memory, data and permissions", "Marketing, sales and operations will be run from one place"] },
        { title: "The company of the future", desc: "Smaller team, multiples of performance. People shift from routine to strategy and decision-making.", points: ["A smaller team can deliver multiples of performance", "People shift from routine to strategy, relationships and decisions", "Speed of deployment will be the biggest advantage", "AI enables scaling without linear growth in chaos and cost"] },
        { title: "The world is changing", desc: "New customer expectations, new types of services, a new value of human work. Waiting is not a strategy.", points: ["New customer expectations and new types of services will emerge", "Human-made outputs will carry premium value", "AI will change companies, healthcare, services and daily life", "Waiting is not a strategy"] },
      ],
      quote1: "The question is no longer whether AI will change your company.",
      quoteAccent: "The question is whether you start managing it before the market starts changing you.",
      ctaTitle: "Find out which changes are most critical for your company",
      ctaDesc: "We'll look at your sales, marketing and operations and propose where AI delivers the biggest real impact.",
      ctaBtn: "Book AI audit",
    },

    faq: {
      eyebrow: "FAQ",
      title1: "Frequently asked",
      titleAccent: "questions",
      sub: "Answers to what clients ask us most often before working together.",
      transition: "If you have questions specific to your company, the fastest way to answer them is the initial AI audit.",
      items: [
        { q: "What kind of companies is the solution suitable for?", a: "For small and mid-sized companies that want to systematically run sales, marketing and operations. We most often work with B2B companies, services, retail, healthcare and growing companies — from 10 to 500 people." },
        { q: "Do we need to have our own systems already in place?", a: "No. We can work with existing tools or design a solution from scratch. As part of the audit we map your current state and propose what to keep, what to add and what to connect." },
        { q: "Can you connect to CRM, marketing and internal tools?", a: "Yes. We integrate with common CRM, email, marketing and operational tools. Specific integrations are addressed in the architecture design — always based on your company's reality." },
        { q: "How long does the first deployment usually take?", a: "It depends on scope. You typically see first results within weeks. Full transformation runs gradually, in managed phases — not as a one-off big project." },
        { q: "Do you also manage the solution after launch?", a: "Yes, and we consider it a key part. An AI solution without continuous management and optimization loses its impact. We don't ship a solution and disappear." },
        { q: "Is the solution suitable for a smaller team?", a: "Yes. AI and automation are extraordinarily effective for smaller teams — they replace manual work and increase performance without growing the headcount." },
        { q: "What if we don't know where to start?", a: "That's exactly what our AI audit is for. We look at your processes in sales, marketing and operations and propose specific places where AI brings the highest impact." },
        { q: "Can you handle sales, marketing and operations at once?", a: "Yes, and that's exactly our added value. We don't work in isolated silos — we connect all three areas into one managed system." },
        { q: "What if we already have part of the tools in place?", a: "We'll build on them. We don't replace what works — we add the missing parts, connect them and integrate them into a coherent system." },
        { q: "What is the first step of working together?", a: "You fill out a short form or write to us. We arrange an initial consultation, walk through diagnostics of your processes and propose the next steps." },
      ],
    },

    cta: {
      eyebrow: "Contact",
      title1: "Find out where AI brings you",
      titleAccent: "the biggest real impact",
      sub: "We'll look at your sales, marketing and operational processes and propose specific places where AI and automation deliver the highest impact.",
      form: {
        name: "Name",
        namePh: "Your name",
        company: "Company",
        companyPh: "Company name",
        email: "Email",
        emailPh: "email@company.com",
        phone: "Phone",
        phonePh: "+421 ...",
        message: "Brief description of the situation",
        messagePh: "Describe your situation, challenges or what you're solving...",
        submit: "I want an AI audit",
        note: "The first step is not buying a tool. The first step is understanding where AI has the biggest impact in your company.",
      },
      side: {
        overview: "AI Audit Overview",
        sales: "Sales",
        marketing: "Marketing",
        ops: "Operations",
        processTitle: "Process",
        processSteps: ["Process diagnostics", "Architecture design", "Implementation", "Management & optimization"],
        contactTitle: "Contact",
      },
    },

    footer: {
      tagline: "An AI transformation platform for companies that want managed performance instead of chaos.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      cta: "Book a consultation",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms",
    },

    blog: {
      back: "Back to homepage",
      pageBadge: "Blog & Resources",
      title: "Useful articles & resources",
      sub: "Practical know-how for B2B companies that want to grow with AI and modern sales.",
      readMore: "Read more",
      readMoreAria: "Read more:",
      relatedBadge: "Related topics",
      relatedTitle: "Explore by area",
      relatedSub: "Topical clusters that group articles into logical sets — pick the area that interests you most.",
      readLatest: "Read the latest",
      articleOne: "article",
      articleFew: "articles",
      articleMany: "articles",
      docTitle: "Blog & Resources | ai.mercatores.sk",
      docDesc: "Practical articles on B2B sales, AI in sales, sales outsourcing and automation for companies.",
      topics: {
        ai: { name: "AI in sales", description: "Practical AI deployment in B2B sales and lead qualification." },
        outsourcing: { name: "Sales outsourcing", description: "When an external sales team makes sense and when it doesn't." },
        automation: { name: "Automation", description: "CRM, campaigns and processes without manual routine." },
        gastro: { name: "Gastro & HoReCa", description: "AI solutions for restaurants, hotels and operations." },
        cases: { name: "Case studies", description: "Real implementations with measurable results." },
        data: { name: "Data & analytics", description: "Open-source data and analytics for sales growth." },
      },
      articles: [
        { title: "How we implemented AI into Magnaseal's sales process — case study", description: "A specialized B2B product, fragmented market and almost zero awareness in Slovakia. How we used AI to build a sales process for the magnetic patch distributor Magnaseal." },
        { title: "A new player enters the Slovak gastro market: AI-driven operations instead of yet another POS system", description: "The Slovak gastro market knows dozens of POS systems and QR menu tools. AI-driven operations bring real change to daily restaurant operations instead of another feature list." },
        { title: "AI in gastro operations: how restaurants and hotels increase performance without more staff", description: "Tight margins, staff turnover and demand fluctuations. AI brings a different approach than another employee — automation of repetitive tasks and better real-time decisions." },
        { title: "Go High Level: how to automate B2B sales and marketing in Slovakia", description: "Most B2B companies use 5–8 tools that don't talk to each other. How Go High Level unifies CRM, emails, landing pages and automation into one platform." },
        { title: "AI in B2B sales: how to transform selling with artificial intelligence", description: "AI in sales isn't the future — it's the present. Companies that deployed AI early have a measurable advantage today. A practical view of where AI in B2B sales really works." },
        { title: "What is sales outsourcing and when is it worth it?", description: "Searching for a sales rep for months with no result? Or have a rep with below-average results? When sales outsourcing is the answer and when it isn't — cost and risk comparison." },
        { title: "Innovative use of open-source data in sales and marketing", description: "Data drives B2B strategies, but without understanding the benefits of integration its value is lost. An intro to how open-source data optimizes sales and marketing." },
        { title: "Go High Level: sales automation in Slovakia", description: "An all-in-one platform for CRM, email marketing, AI agent and automation. When it's worth it for B2B companies and what alternatives exist on the Slovak market." },
      ],
    },
  },
} as const;

export type Dict = typeof translations.sk;

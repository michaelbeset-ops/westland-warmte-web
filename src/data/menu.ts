export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "ontbijt",
    title: "Ontbijt",
    subtitle: "Tot 11:30",
    items: [
      { name: "Yoghurt met granola", description: "Volle yoghurt, huisgemaakte granola, vers fruit en honing", price: "6,50" },
      { name: "Boerenomelet", description: "Drie eieren met spek, ui, paprika en oude kaas", price: "9,75" },
      { name: "Croissant duo", description: "Twee verse croissants met roomboter en jam van de fruitteler", price: "5,25" },
      { name: "Wentelteefjes", description: "Van Westlands desembrood, kaneelsuiker en gepocheerd peertje", price: "8,95" },
    ],
  },
  {
    id: "lunch",
    title: "Lunch",
    items: [
      { name: "Tomatensoep van het huis", description: "Met verse basilicum en een geroosterd broodje", price: "6,75" },
      { name: "Quiche van de dag", description: "Wisselende vulling, gestoomde groene salade", price: "10,50" },
      { name: "Burrata salade", description: "Westlandse tomaat, basilicum, olijfolie en zuurdesem", price: "12,50" },
      { name: "Uitsmijter ham & kaas", description: "Drie eieren op desembrood, met augurk", price: "9,25" },
    ],
  },
  {
    id: "broodjes",
    title: "Broodjes",
    subtitle: "Op desem of bruin",
    items: [
      { name: "Carpaccio", description: "Pesto, pijnboompitten, rucola en oude Parmezaan", price: "11,50" },
      { name: "Gerookte zalm", description: "Roomkaas, kappertjes, rode ui en dille", price: "11,95" },
      { name: "Brie & vijg", description: "Gegrilde brie, vijgenjam, walnoot en honing", price: "9,75" },
      { name: "Gezond", description: "Oude kaas, ham, ei, komkommer en tuinkers", price: "8,50" },
      { name: "Tonijnsalade", description: "Huisgemaakt, met kappertjes en bieslook", price: "8,95" },
    ],
  },
  {
    id: "zoet",
    title: "Zoet & gebak",
    subtitle: "Alles huisgemaakt",
    items: [
      { name: "Taart van de dag", description: "Vraag het aan de bar — er staat altijd iets vers", price: "4,75" },
      { name: "Cheesecake", description: "Met seizoensfruit en een speculaaskruim", price: "5,25" },
      { name: "Brownie", description: "Fudgy, met zeezout en een bolletje vanille-ijs", price: "5,75" },
      { name: "Worteltaart", description: "Met roomkaasglazuur en geroosterde walnoot", price: "4,95" },
    ],
  },
  {
    id: "koffie",
    title: "Koffie & thee",
    subtitle: "Bonen van branderij Stielman",
    items: [
      { name: "Espresso", description: "", price: "3,00" },
      { name: "Cappuccino", description: "", price: "3,75" },
      { name: "Flat white", description: "", price: "4,25" },
      { name: "Latte macchiato", description: "Klassiek of met huisgemaakte siroop (+0,50)", price: "4,50" },
      { name: "Verse muntthee", description: "Met honing en gember", price: "3,95" },
      { name: "Losse thee", description: "Wisselende selectie van Tea Bar", price: "3,50" },
    ],
  },
  {
    id: "fris",
    title: "Fris & sappen",
    items: [
      { name: "Verse jus d'orange", description: "Ter plekke geperst", price: "4,50" },
      { name: "Huisgemaakte limonade", description: "Met seizoensfruit uit de buurt", price: "3,95" },
      { name: "Frisdrank", description: "Coca-Cola, Fritz-kola, Sourcy bruisend / plat", price: "3,50" },
      { name: "Karnemelk", description: "Van Hoeve Biesland", price: "3,25" },
    ],
  },
];

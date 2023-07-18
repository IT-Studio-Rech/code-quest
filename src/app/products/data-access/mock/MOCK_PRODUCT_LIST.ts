export interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  description: string;
  parameters: { key: string; value: string }[];
  deliveryDate: string;
  imageUrl: string;
}

export const MOCK_PRODUCTS = () => {
  let products: Product[] = JSON.parse(
    localStorage.getItem('mockedProducts') || '[]'
  );
  if (!!products.length) {
    return products;
  }
  products = (
    [
      {
        id: 55,
        name: 'Akustische Gitarre',
        price: 220.99,
        tags: ['Musik', 'Holz', 'Kunst'],
        description:
          'Eine klassische Akustikgitarre aus hochwertigem Holz für leidenschaftliche Musiker.',
        parameters: [
          { key: 'Größe', value: '100 x 35 x 10 cm' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 76,
        name: 'Veganer Kochbuch',
        price: 14.99,
        tags: ['Kochen', 'Vegan', 'Bücher'],
        description:
          'Ein umfassendes Kochbuch mit einer Vielzahl von veganen Rezepten für gesundes und schmackhaftes Essen.',
        parameters: [
          { key: 'Größe', value: '25 x 20 x 3 cm' },
          { key: 'Farbe', value: 'Grün' },
          { key: 'Material', value: 'Papier' },
        ],
      },
      {
        id: 87,
        name: '3D-Drucker',
        price: 349.99,
        tags: ['Elektronik', 'Technologie'],
        description:
          'Ein leistungsstarker 3D-Drucker für den Einsatz in Bildung, Design und Heimanwendungen.',
        parameters: [
          { key: 'Größe', value: '45 x 40 x 60 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Material', value: 'Metall und Kunststoff' },
        ],
      },
      {
        id: 98,
        name: 'Bienenwachs-Kerze',
        price: 7.99,
        tags: ['Dekoration', 'Geschenk'],
        description:
          'Eine umweltfreundliche Bienenwachs-Kerze, die ein warmes und gemütliches Licht ausstrahlt.',
        parameters: [
          { key: 'Größe', value: '10 cm' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Bienenwachs' },
        ],
      },
      {
        id: 69,
        name: 'Lego Set',
        price: 10.99,
        tags: ['Toy', 'Kunststoff'],
        description:
          'Ein unterhaltsames Lego Set zum Bauen von verschiedenen Modellen.',
        parameters: [
          { key: 'Größe', value: 'M' },
          { key: 'Farbe', value: 'Blau' },
          { key: 'Material', value: 'Kunststoff' },
        ],
      },
      {
        id: 10,
        name: 'Rucksack',
        price: 29.99,
        tags: ['Outdoor', 'Reisen'],
        description: 'Ein robuster Rucksack für Abenteuer und Reisen.',
        parameters: [
          { key: 'Größe', value: '30 x 40 x 15 cm' },
          { key: 'Farbe', value: 'Grau' },
          { key: 'Material', value: 'Nylon' },
        ],
      },
      {
        id: 11,
        name: 'Smartphone',
        price: 499.99,
        tags: ['Elektronik', 'Technologie'],
        description:
          'Ein leistungsstarkes Smartphone mit beeindruckenden Funktionen.',
        parameters: [
          { key: 'Größe', value: '6.5 Zoll' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Material', value: 'Glas und Metall' },
        ],
      },
      {
        id: 27,
        name: 'Yoga-Matte',
        price: 35.99,
        tags: ['Fitness', 'Yoga', 'Outdoor'],
        description:
          'Eine rutschfeste Yoga-Matte, perfekt für Ihr tägliches Workout drinnen oder draußen.',
        parameters: [
          { key: 'Größe', value: '180 x 60 cm' },
          { key: 'Farbe', value: 'Lila' },
          { key: 'Material', value: 'Kunststoff' },
        ],
      },
      {
        id: 28,
        name: 'E-Book Reader',
        price: 120.99,
        tags: ['Bücher', 'Elektronik', 'Reisen'],
        description:
          'Ein leichter E-Book-Reader mit hoher Auflösung und lang anhaltendem Akku, ideal für Bücherwürmer auf Reisen.',
        parameters: [
          { key: 'Größe', value: '16 x 12 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Speicherkapazität', value: '8 GB' },
        ],
      },
      {
        id: 29,
        name: 'Elektrisches Keyboard',
        price: 200.99,
        tags: ['Musik', 'Elektronik', 'Geschenk'],
        description:
          'Ein elektronisches Keyboard mit vielen Funktionen, perfekt als Geschenk für Musikliebhaber.',
        parameters: [
          { key: 'Größe', value: '95 x 35 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Tasten', value: '61' },
        ],
      },
      {
        id: 30,
        name: 'Holz-Schachspiel',
        price: 45.99,
        tags: ['Holz', 'Kunst', 'Spielzeug'],
        description:
          'Ein handgefertigtes Schachspiel aus Holz, sowohl ein Kunstwerk als auch ein unterhaltsames Spiel.',
        parameters: [
          { key: 'Größe', value: '40 x 40 cm' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 31,
        name: 'Vinyl Schallplattenspieler',
        price: 150.99,
        tags: ['Musik', 'Technologie', 'Dekoration'],
        description:
          'Ein Retro-Schallplattenspieler, der den klassischen Klang von Vinyl mit moderner Technologie verbindet.',
        parameters: [
          { key: 'Größe', value: '35 x 35 x 15 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 32,
        name: 'Outdoor-Campingset',
        price: 89.99,
        tags: ['Outdoor', 'Reisen', 'Kochen'],
        description:
          'Ein kompaktes Campingset mit Kochausrüstung, ideal für Outdoor-Abenteuer und Reisen.',
        parameters: [
          { key: 'Größe', value: '30 x 20 x 20 cm' },
          { key: 'Farbe', value: 'Grün' },
          { key: 'Material', value: 'Metall, Kunststoff' },
        ],
      },
      {
        id: 34,
        name: 'Holzbausatz Dinosaurier',
        price: 19.99,
        tags: ['Toy', 'Kunst', 'Holz'],
        description:
          'Ein kreativer Holzbausatz, mit dem Kinder ihren eigenen Dinosaurier zum Leben erwecken können.',
        parameters: [
          { key: 'Größe', value: 'Variable' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 35,
        name: 'Kunststoff Frisbee',
        price: 9.99,
        tags: ['Toy', 'Kunststoff', 'Outdoor'],
        description:
          'Ein leichter Kunststoff-Frisbee, perfekt für Spaß und Spiele im Freien.',
        parameters: [
          { key: 'Größe', value: '27 cm Durchmesser' },
          { key: 'Farbe', value: 'Blau' },
          { key: 'Material', value: 'Kunststoff' },
        ],
      },
      {
        id: 36,
        name: 'Handgemachte Holzschneidebretter',
        price: 49.99,
        tags: ['Holz', 'Kochen', 'Kunst'],
        description:
          'Set von handgemachten Schneidebrettern aus nachhaltigem Holz. Ideal für jeden Kochliebhaber, der auch Kunst schätzt.',
        parameters: [
          { key: 'Größe', value: '30 x 20 x 2 cm' },
          { key: 'Material', value: 'Holz' },
          { key: 'Pflege', value: 'Handwäsche empfohlen' },
        ],
      },
      {
        id: 37,
        name: 'Wiederaufladbare Bluetooth-Lautsprecher',
        price: 150.0,
        tags: ['Musik', 'Elektronik', 'Outdoor'],
        description:
          'Wiederaufladbare Bluetooth-Lautsprecher mit hervorragender Klangqualität. Perfekt für Musikliebhaber, die gerne im Freien sind.',
        parameters: [
          { key: 'Batterielebensdauer', value: '12 Stunden' },
          { key: 'Bluetooth-Version', value: '5.0' },
          { key: 'Wasserresistenz', value: 'IPX7' },
        ],
      },
      {
        id: 38,
        name: 'Yoga-Matten-Set',
        price: 60.99,
        tags: ['Fitness', 'Yoga', 'Geschenk'],
        description:
          'Komplettes Yoga-Matten-Set, inklusive rutschfeste Matte, Yoga-Block und Stretching-Gurt. Ein großartiges Geschenk für Yoga-Enthusiasten.',
        parameters: [
          { key: 'Matte Größe', value: '183 x 61 x 0.6 cm' },
          { key: 'Material', value: 'Umweltfreundlicher Kunststoff' },
          { key: 'Farbe', value: 'Lila' },
        ],
      },
      {
        id: 39,
        name: 'Eco-Kochbuch',
        price: 30.0,
        tags: ['Kochen', 'Bücher', 'Geschenk'],
        description:
          'Ein Eco-Kochbuch voller Rezepte, die sowohl lecker als auch umweltfreundlich sind. Das perfekte Geschenk für jeden umweltbewussten Koch.',
        parameters: [
          { key: 'Seiten', value: '200' },
          { key: 'Sprache', value: 'Deutsch' },
          { key: 'Gewicht', value: '1 kg' },
        ],
      },
      {
        id: 40,
        name: 'Tragbarer Solarladegerät',
        price: 45.99,
        tags: ['Elektronik', 'Outdoor', 'Reisen'],
        description:
          'Ein tragbares Solarladegerät, ideal für das Aufladen von Geräten während des Reisens oder Campings. Mit hoch effizienten Solarzellen und USB-Anschluss.',
        parameters: [
          { key: 'Leistung', value: '20W' },
          { key: 'Anschlüsse', value: 'USB' },
          { key: 'Gewicht', value: '0.5 kg' },
        ],
      },
      {
        id: 41,
        name: 'Elektronisches Yoga-Musik-Set',
        price: 120.5,
        tags: ['Musik', 'Technologie', 'Yoga'],
        description:
          'Erleben Sie Yoga auf einem neuen Niveau mit unserem Elektronischen Yoga-Musik-Set. Diese Technologie hilft Ihnen dabei, sich zu entspannen und Ihre Praxis zu vertiefen.',
        parameters: [
          { key: 'Größe', value: '30 x 20 x 10 cm' },
          { key: 'Farbe', value: 'Weiß' },
          { key: 'Batterielebensdauer', value: '10 Stunden' },
        ],
      },
      {
        id: 42,
        name: 'Outdoor-Kochbuch',
        price: 25.99,
        tags: ['Kochen', 'Bücher', 'Outdoor'],
        description:
          'Dieses Outdoor-Kochbuch bietet eine Vielzahl an Rezepten, die Sie mit einfachen, tragbaren Zutaten zubereiten können.',
        parameters: [
          { key: 'Seiten', value: '200' },
          { key: 'Sprache', value: 'Deutsch' },
          { key: 'Gewicht', value: '1 kg' },
        ],
      },
      {
        id: 43,
        name: 'Holz-Roboter-Bausatz',
        price: 50.99,
        tags: ['Toy', 'Holz', 'Technologie'],
        description:
          'Ein DIY-Bausatz für einen faszinierenden Roboter aus Holz. Perfekt für kleine und große Technikbegeisterte.',
        parameters: [
          { key: 'Größe', value: '20 x 10 x 5 cm' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 44,
        name: 'Reise-Gitarrenständer',
        price: 35.0,
        tags: ['Musik', 'Reisen', 'Holz'],
        description:
          'Ein zusammenklappbarer Gitarrenständer aus Holz, ideal für Musiker auf Reisen.',
        parameters: [
          { key: 'Größe', value: '30 x 15 x 5 cm' },
          { key: 'Farbe', value: 'Natur' },
          { key: 'Material', value: 'Holz' },
        ],
      },
      {
        id: 45,
        name: 'Fitness-Elektronik-Set',
        price: 150.0,
        tags: ['Fitness', 'Elektronik', 'Technologie'],
        description:
          'Ein umfassendes Fitness-Elektronik-Set, das Ihnen hilft, Ihre Trainingsdaten im Auge zu behalten und Ihre Fitnessziele zu erreichen.',
        parameters: [
          { key: 'Größe', value: '30 x 20 x 10 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Batterielebensdauer', value: '10 Stunden' },
        ],
      },
      {
        id: 46,
        name: 'Bluetooth-Lautsprecher',
        price: 79.99,
        tags: ['Elektronik', 'Audio', 'Technologie'],
        description:
          'Ein tragbarer Bluetooth-Lautsprecher mit beeindruckendem Klang und stilvollem Design.',
        parameters: [
          { key: 'Größe', value: '15 x 10 x 5 cm' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Batterielaufzeit', value: '8 Stunden' },
        ],
      },
      {
        id: 47,
        name: 'Kunst-Malset',
        price: 29.99,
        tags: ['Kunst', 'Geschenk'],
        description:
          'Ein umfangreiches Kunst-Malset mit verschiedenen Farben und Pinseln für kreative Meisterwerke.',
        parameters: [
          { key: 'Enthält', value: '24 Farben, 10 Pinsel' },
          { key: 'Farben', value: 'Acryl' },
          { key: 'Verpackung', value: 'Aufbewahrungskoffer' },
        ],
      },
      {
        id: 48,
        name: 'Kochgeschirr-Set',
        price: 99.99,
        tags: ['Kochen', 'Geschenk', 'Haushalt'],
        description:
          'Ein hochwertiges Kochgeschirr-Set mit verschiedenen Töpfen und Pfannen für die perfekte Küchenausstattung.',
        parameters: [
          { key: 'Enthält', value: '3 Töpfe, 2 Pfannen, 1 Deckel' },
          { key: 'Material', value: 'Edelstahl' },
          { key: 'Griffe', value: 'Hitzebeständig' },
        ],
      },
      {
        id: 49,
        name: 'Yoga-Meditationskissen',
        price: 39.99,
        tags: ['Yoga', 'Fitness', 'Dekoration'],
        description:
          'Ein komfortables Meditationskissen für entspannte Yoga- und Meditationsübungen.',
        parameters: [
          { key: 'Größe', value: '30 x 30 x 10 cm' },
          { key: 'Farbe', value: 'Blau' },
          { key: 'Material', value: 'Baumwolle' },
        ],
      },
      {
        id: 50,
        name: 'E-Reader-Hülle',
        price: 19.99,
        tags: ['Elektronik', 'Bücher', 'Geschenk'],
        description:
          'Eine schützende Hülle für Ihren E-Reader mit stilvollem Design und strapazierfähigem Material.',
        parameters: [
          { key: 'Kompatibilität', value: 'Passend für gängige E-Reader' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Material', value: 'Leder' },
        ],
      },
      {
        id: 51,
        name: 'Wasserkocher',
        price: 34.99,
        tags: ['Haushalt', 'Küche'],
        description:
          'Ein leistungsstarker Wasserkocher für schnelles und einfaches Erhitzen von Wasser.',
        parameters: [
          { key: 'Fassungsvermögen', value: '1,7 Liter' },
          { key: 'Farbe', value: 'Edelstahl' },
          { key: 'Material', value: 'Edelstahl und Kunststoff' },
        ],
      },
      {
        id: 52,
        name: 'Tischtennisschläger',
        price: 24.99,
        tags: ['Sport', 'Tischtennis'],
        description:
          'Ein hochwertiger Tischtennisschläger für schnelle Ballwechsel und präzises Spiel.',
        parameters: [
          { key: 'Spielerlevel', value: 'Einsteiger bis Fortgeschrittene' },
          { key: 'Farbe', value: 'Rot-Schwarz' },
          { key: 'Material', value: 'Holz und Gummi' },
        ],
      },
      {
        id: 53,
        name: 'Reisekoffer',
        price: 79.99,
        tags: ['Reisen', 'Gepäck'],
        description:
          'Ein robuster Reisekoffer mit Rollen und ausziehbarem Griff für bequemes Reisen.',
        parameters: [
          { key: 'Größe', value: 'M' },
          { key: 'Farbe', value: 'Blau' },
          { key: 'Material', value: 'Polypropylen' },
        ],
      },
      {
        id: 54,
        name: 'Bluetooth-Kopfhörer',
        price: 99.99,
        tags: ['Elektronik', 'Audio'],
        description:
          'Hochwertige Bluetooth-Kopfhörer für kabellosen Musikgenuss mit exzellenter Klangqualität.',
        parameters: [
          { key: 'Akkulaufzeit', value: '20 Stunden' },
          { key: 'Farbe', value: 'Schwarz' },
          { key: 'Material', value: 'Kunststoff' },
        ],
      },
      {
        id: 55,
        name: 'E-Book-Reader',
        price: 129.99,
        tags: ['Elektronik', 'Lesen'],
        description:
          'Ein hochauflösender E-Book-Reader für komfortables Lesen digitaler Bücher.',
        parameters: [
          { key: 'Bildschirmgröße', value: '6 Zoll' },
          { key: 'Farbe', value: 'Weiß' },
          { key: 'Speicherplatz', value: '8 GB' },
        ],
      },
    ] as Product[]
  ).map((product) => {
    product.imageUrl = `https://picsum.photos/id/${product.id}/200/200`;
    const endDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000); // today + 14 days
    product.deliveryDate = randomDate(new Date(), endDate).toISOString();
    return product;
  });
  localStorage.setItem('mockedProducts', JSON.stringify(products));

  console.log('######### mockedProducts store', products);
  return products;
};

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
